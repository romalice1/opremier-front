import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
// import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { ApiService} from '../../services/api/api.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

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
        protected spinner: Ng4LoadingSpinnerService
    ) { }

    

    totalTopup=0;

    //Array of customers. Change from customers1 to customers
    customerData:any[];

    voucherStats:{
      available:number,
      redeemed: number
    }

    customers:any; //to be deprecated

    error:any; //Notification for success
    success:any; //Notification for error

    html: HTMLDocument;
  
    merchant_id = this.user.getUserSession().organization;
    user_id = this.user.getUserSession().id;

    ngOnInit() {
        this.spinner.show()
        //Get voucher statistics
        this.http.get( this.api.VOUCHERS+"/topups/merchant/" + this.merchant_id ).subscribe(
            res=>{
            
                //get customers (to be deprecated)
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
                this.customers = this.fetchCustomers( res );
                console.log("CUST: "+JSON.stringify(this.customers));

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
            var id,name,amount;
            id = data[i].id;
            name = data[i].name;
            amount = data[i].totalTopups;
            customers.push([name, amount]);
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
    voucherUsageChart = new Chart({
        chart: {
            type: 'pie',
            margin: '0',
            backgroundColor: 'transparent'
        },
        title: {
            text: 'Vouchers Usage'
        },
        legendOptions: {
            enabled: true,
            align: 'left',
            layout: 'vertical',
            verticalAlign: 'middle',
            x: 0,
            y: 0,
            symbolHeight: '2px',
            useHTML: true,
            labelFormatter: function () {
                return '<div style="display:block;width:150px;height:100px;margin-top:20px; border-radius:4px; border:1px solid ' + this.color + '; background-color:#ffffff;"><div style="display:block;text-align:center; width:150px;padding:5px;font-size:10px;color:#000000;text-transform:uppercase;">' + this.name + '</div> <div style="display:block;text-align:center;padding:17px;width:150px;font-size:30px;color:' + this.color + '">' + Highcharts.numberFormat(this.y, 0, '.', ',') + '</div></div>';
            }
        },
        plotOptions: {
            pie: {
                size: '80%',
                shadow: false,
                innerSize: '50%',
                center: ['70%', '50%']
            }
        },
        tooltip: {
            valueDecimals: 1,
            headerFormat: '',
            pointFormat: '{point.name}: <b>{point.percentage:.2f} % </b>'
        },
        series: [{
                name: 'Numbers',
                showInLegend: true,
                dataLabels: {
                    enabled: false
                },
                data: [
                    {
                        name: 'Available', 
                        color: '#2db032', 
                        y:80/* this.voucherStats.available*/
                    },
                    {
                        name: 'Redeemed', 
                        color: '#b9b9b9', 
                        y: 20 /*this.voucherStats.vouchers.redeemed*/
                    }

                ]
            }],
        responsive: {
            rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            enabled: false
                        },
                        tooltip: { enabled: false },
                        
                        plotOptions: {
                            pie: {
                                size: '70%',
                                shadow: false,
                                innerSize: '50%',
                                center: ['50%', '50%']
                            }  
                        },
                        
                        series: [{
                                name: 'Numbers',
                                showInLegend: true,
                                dataLabels: {
                                    enabled: true,
                                    format: '<b style="color:{point.color}">{point.name}</b><br /> <b>{point.percentage:.0f} % </b>',
                                    connectorColor: 'grey',
                                    connectorWidth: 1
                                }
                            }],
                        subtitle: {
                            text: null
                        },
                        credits: {
                            enabled: false
                        }
                    }
                }]
        }

    });

    /* END VoucherUsage */



     /* Top10VoucherCustomers  */
    voucherClientsChart = new Chart({
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
            data: /*this.customers*/[
                ['Customer 1', 351000],
                ['Customer 2', 252229],
                ['Customer 3', 246658],
                ['Customer 4', 142153],
                ['Customer 5', 128852],
                ['Customer 6', 128510],
                ['Customer 7', 112250],
                ['Customer 8', 111100],
                ['Customer 9', 111000],
                ['Customer 10', 110050]
            ],
            borderRadius: 4,
            color: '#d7bb00'
        }],
        responsive: {
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
        }


    });
    /*  Top10VoucherCustomers */






}
