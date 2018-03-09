import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
// import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { ApiService} from '../../services/api/api.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DateService } from '../../services/dates/date.service';

@Component({
  selector: 'app-voucher-dash',
  templateUrl: './voucher-dash.component.html',
  styleUrls: ['./voucher-dash.component.css']
})
export class VoucherDashComponent implements OnInit {

    constructor
    (
        private http: HttpClient,
        private user: UserService,
        private api: ApiService,
        protected spinner: Ng4LoadingSpinnerService,
        private date: DateService
    ) { }

    

    totalTopup=0;
    voucherStats:{
      available:number,
      redeemed: number
    }
    customerDet:any
    customers:any;
    error:any; //Notification for success
    success:any; //Notification for error
    html: HTMLDocument;
  
    merchant_id = this.user.getUserSession().organization;
    user_id = this.user.getUserSession().id;

    voucherUsageChart={}
    voucherClientsChart={}

    /* LOAD DATA PER DATES */
    // Load today
    loadToday(){
        this.loadComponentData( this.date.today(), this.date.today() );
    }
    
    //Load yesterday
    loadYesterday(){
        this.loadComponentData( this.date.yesterday(), this.date.yesterday() );
    }
     
    // Load last week
    loadLastWeek(){
        this.loadComponentData( this.date.lastWeek().start, this.date.lastWeek().end );
    }

    // Load last month
    loadLastMonth(){
        this.loadComponentData( this.date.lastMonth().start, this.date.lastMonth().end );
    }

    // Load last Year
    loadLastYear(){
        this.loadComponentData( this.date.lastYear().start, this.date.lastYear().end );
    }
    /* END LOAD DATA PER DATES */


    ngOnInit() {
        this.spinner.show()
        this.loadComponentData("","")
     }


     loadComponentData(startDate, endDate){
         //Get voucher statistics
        this.http.get( this.api.VOUCHERS+"/topups/merchant/" + this.merchant_id ).subscribe(
            res=>{

                this.spinner.hide() 
            
                // //get customers (to be deprecated)
                var url=this.api.ORGANIZATION+"/organization_relationships/parent/"+this.user.getUserSession().organization+"/relationship?name=CUSTOMER";
                this.http.get(url).subscribe( res => {
                    //Add up funds
                    this.customers = res;

                    this.spinner.hide()
                });

                //Add up funds
                this.totalTopup = this.fetchTopups( res );

                //Vouchers statistics
                this.voucherStats = this.fetchVoucherStats( res );

                // Fetch customers
                this.customerDet = this.fetchCustomers( res );
                
                // charts 
                // - voucher usage stats
                let redeemed=0;
                let available=0;
                let customers=[];
                for(var i=0; i<this.customerDet.length; i++){
                    available = available + this.customerDet[i].vouchers.available
                    redeemed = redeemed + this.customerDet[i].vouchers.redeemed

                    customers.push([this.customerDet[i].name, this.customerDet[i].amount])
                }
                console.log(JSON.stringify(customers) )
                this.voucherUsageChart = this.genVoucherUsageChart(available, redeemed);
                this.voucherClientsChart = this.genVoucherClientsChart(customers);
            });
     }


    /*Fetch total topups*/
    fetchTopups(data:any){
        var total = 0;
        for(var i=0; i<data.length; i++){
            total = total + data[i].totalTopups;
        }
        return total;
    }

    /* Fetch voucher stats */
    fetchCustomers(data:any){
        let customers:any[] = [];

        for(var i=0; i<data.length; i++){
            let id,name,amount;
            let available,redeemed;

            id = data[i].id;
            name = data[i].name;
            amount = data[i].totalTopups;
            available = data[i].vouchers.available,
            redeemed = data[i].vouchers.redeemed,

            customers.push( 
                {
                    id:id,
                    name:name, 
                    amount:amount, 
                    vouchers:{
                        available:available, 
                        redeemed: redeemed
                    }
                        
                } );
        }

        return customers;
    }

    /*Fetch customers*/
    fetchVoucherStats(data:any){
        var stats ={
            available:0,
            redeemed:0
        };
        for(var i=0; i<data.length; i++){
            stats.available = stats.available + data[i].vouchers.available;
            stats.redeemed = stats.redeemed + data[i].vouchers.redeemed;
        }
        return stats;
    }


    /*Add fund to customer*/
    addFund(e){
        this.spinner.show()

        e.preventDefault(); 

        var api = this.api.VOUCHERS+"/vouchers/topup"
        var customerId = e.target.elements[1].value;
        var fundAmount = e.target.elements[2].value;

        var payload={
          amount: fundAmount,
          customerId: customerId,
          merchantId: this.merchant_id,
          userId: this.user_id
        }
        this.http.post<any>(api, payload).subscribe(res=>{
            //Feedback to the user
            if( res.code == 200 ){
                this.success = "Customer's wallet has been toped up successfully!";
                this.error = null;

                //Update the total amount on the page
                this.totalTopup = this.totalTopup+Number(fundAmount);
            }else{
                this.error = "There was an error! Please try again.";
                this.success=null;
            }

            this.spinner.hide()
        });
    }

    // Verify if voucher packs are properly checked
    checkPacks(pack, quantity, packArray:any[]){
        if( pack.checked ){
            if(quantity==""){
                this.error = "The quantity for Pack "+pack.value+" RWF can't be empty";
                this.success=null;
                return false;
            }else{
                this.error=false;
                packArray.push({
                   amount: pack.value,
                   quantity: quantity 
               });
                return true;
            }
        }else{
            return true;
        }
    }

    /* Generate voucher */
    generateVoucher(e){
        e.preventDefault();
        this.spinner.show()

        let api = this.api.VOUCHERS+"/vouchers/generate"

        let packs =[];

        let customerId = e.target.elements[0].value;

        let voucher5 = e.target.elements[2];
        let qtyfor5 =  e.target.elements[3].value;
        let voucher10 = e.target.elements[4];
        let qtyfor10 =  e.target.elements[5].value;
        let voucher20 = e.target.elements[6];
        let qtyfor20 =  e.target.elements[7].value;
        let voucher50 = e.target.elements[8];
        let qtyfor50 =  e.target.elements[9].value;

        /** CHECK PACKS **/
        if(
            this.checkPacks(voucher5, qtyfor5, packs) &&
            this.checkPacks(voucher10, qtyfor10, packs) &&
            this.checkPacks(voucher20, qtyfor10, packs) &&
            this.checkPacks(voucher50, qtyfor50, packs)
            ){

            /** SEND REQUEST **/
            let payload = {
                customerId: customerId,
                merchantId: this.merchant_id,
                packs: packs,
                userId: this.user_id
            }
            
            this.http.post<any>(api, payload).subscribe(resp=>{
                if( resp.code==200 ){
                    this.success = resp.description+"Balance: "+resp.body.balance+" RWF";
                    this.error=false;
                }else{
                    this.error = resp.description;
                    this.success = false;
                }

                this.spinner.hide()
            });
            /** DONE SEND REQUEST **/

        }
        /** END CHECK PACKS **/
    }





     /****CHARTS*****/
     /* VouchersUsage */
    genVoucherUsageChart(available, redeemed){

        let redPerc = redeemed*100/(available+redeemed);
        let availPerc = available*100/(available+redeemed);

        return new Chart({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Browser market shares in January, 2018'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                name: 'Numbers',
                data: [{
                    name: 'Available', 
                    color: '#2db032', 
                    y: availPerc
                },
                {
                    name: 'Redeemed', 
                    color: '#b9b9b9', 
                    y: redPerc
                }]
            }]
        });

    } 
    /* END VoucherUsage */



     /* Top10VoucherCustomers  */
    genVoucherClientsChart(customerData){
        return new Chart({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top 10 Customers'
            },
            xAxis: {
                type: 'category',
                labels: {
                    style: {
                        fontSize: '11px',
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Amount Sold',
                    style: {
                        color: '#999999'
                    }
                },
                labels: {
                    style: {
                        color: '#999999'
                    }
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: '<b>{point.y} FRW</b>'
            },
            series: [{
                name: 'Customers',
                data: customerData
                    /*['Customer 1', 351000],
                    ['Customer 2', 252229],*/
                ,
                // borderRadius: 4,
                color: '#d7bb00'
            }],
            /*responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        exporting: {
                            enabled: false
                        },
                        yAxis: [{
                            labels: {
                                align: 'left',
                                x: 0,
                                y: -5,
                                style: {
                                    fontSize: '7px',
                                    color: '#999999'
                                }
                            },
                            title: {
                                text: null
                            }
                        }]
                    }
                }]
            }*/


        });
    }
    /*  Top10VoucherCustomers */






}
