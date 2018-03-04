import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { HttpClient } from '@angular/common/http';
import { ApiService} from '../../services/api/api.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { UserService } from '../../services/user.service';
import { DateService } from '../../services/dates/date.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

    products = [] //[{id:string,name:string,quantity:string}] 
    salesData = {}; 

    tanksCapacityChart = {}
    transSummaryChart = {}
    productSalesChart = {}

    constructor(
      private http: HttpClient,
      private api: ApiService,
      protected spinner: Ng4LoadingSpinnerService,
      private user: UserService,
      private date: DateService
      ) { }

    // stockURL = this.api.PRODUCT+"/vendor_stock_products";
    stockUrl(start, end){
      return this.api.PRODUCT+"/dealers/"+this.user.getUserSession().organization+"?start="+start+"&end="+end;
    }

    getSalesApi(start, end){ 
      return this.api.PRODUCT+"/sales/merchant/"+this.user.getUserSession().organization+"/transactions?start="+start+"&end"+end;
    }

    getTanksUrl(){
        return this.api.PRODUCT+"/tanks/dealer/"+this.user.getUserSession().organization+"/attachments"  
    }

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
        //Load all data needed by this component
        this.loadComponentData( this.date.today(), this.date.today() );
    }


    loadComponentData(startDate, endDate){

        this.spinner.show()

        this.http.get<any[]>( this.stockUrl( startDate, endDate ) ).subscribe(
            res => {
                this.spinner.hide()

                //Assign initial values
                var tmpProd = {
                    id:       res[0].product.id,
                    name:     res[0].product.name,
                    quantity: res[0].currentQuantity
                }
                this.products.push( tmpProd );
                
                //Loop throught data
                for(var i=1; i<res.length; i++){

                    var isFound = false;

                    //check if product already exists in array
                    for (var j=0; j < this.products.length; j++) {
                        if (this.products[j].id === res[i].product.id) {
                            this.products[j].quantity = this.products[j].quantity + res[i].currentQuantity;
                            
                            isFound = true;
                        }
                    }

                    //If nothing was found, create a new object
                    if( !isFound ){
                        // Add a new object to the array
                        var prod = {
                            id: res[i].product.id,
                            name: res[i].product.name,
                            quantity: res[i].currentQuantity
                        }
                        this.products.push(prod);
                    }

                }

                //Get sales data

                this.http.get<any>( this.getSalesApi(startDate, endDate)  ).subscribe(resp=>{

                    //Check if sales data is provided
                    if(resp.body.length != 0){
                        this.salesData = resp.body[0].details //Array of transaction data
                    }

                    //process data for sales graph

                    //display tanks capacity chart
                    let categories=[]
                    let data = []
                    for(var i=0; i < this.products.length; i++ ){
                        categories.push(this.products[i].name)
                        data.push(this.products[i].quantity)
                    }

                    this.tanksCapacityChart = this.genTanksCapChart(categories, data);
                    
                    this.transSummaryChart = this.gentransSummaryChart();
                    this.productSalesChart = this.genProductSalesChart();
                });

                //Get tanks data
                this.http.get(this.getTanksUrl()).subscribe(res=>{
                    console.log(res)
                });
                
        });
    }

//extract data for transaction chart
XtransData(input:any[]){
    let categories=[]
    let series:any[] = []
    for(var i=0; i<input.length; i++){
        categories.push( input[i].recordDate )

        // series.push( {name:input[i].name, } )
    }
}
  /*Transaction summary chart*/
  gentransSummaryChart( 
      // categories:any[], 
      // series:[{
      //     name:string,
      //     data:any[]
      // }] 
      ){
      return new Chart({
        chart: {
            type: 'column'
        },

        title: {
            text: 'Quantities Sales - Daily'
        },
        
        xAxis: {
            categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
            crosshair: true,
            type: 'category',
            labels: {
                style: {
                    fontSize: '11px',
                    color: '#999999'
                }
            }
        },
        
        
        
        yAxis: {
            min: 0,
            title: {
                text: 'Quantities in Liters',
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
            headerFormat: 'Sold at <strong>{point.key} hour</strong> of the day<br />',
            pointFormat: '- <span style="color:{series.color}">{series.name}: <b>{point.y:,.0f} L</b></span><br />',
            shared: true
        },
        
        
        series: [{
            name: 'Super',
            // color: '#057ac0',
            // borderRadius: '4',
            data: [2141, 2547, 3212, 3554, 3850, 3776, 4007, 4352, 3914, 3910, 3301, 4050, 4700, 2803, 2915, 3116, 0, 0, 0, 0, 0, 0, 0, 0]

        },
        {
            name: 'Gasoil',
            // color: '#d9d928',
            // borderRadius: '4',
            data: [1141, 1547, 2212, 1554, 2850, 1776, 3007, 2352, 2914, 2910, 2301, 2050, 2700, 1803, 1915, 1116, 0, 0, 0, 0, 0, 0, 0, ]

        },
        {
            name: 'Kerosene',
             // color: '#000000',
            // borderRadius: '4',
            data: [241, 247, 212, 254, 250, 376, 307, 352, 314, 310, 301, 350, 300, 303, 315, 216, 0, 0, 0, 0, 0, 0, 0, 0, ]

        }],
        
        responsive: [{
            rules: [{
                condition: {
                    maxWidth: 500
                },

                chartOptions: { 
                    /*chart: {
                        type: 'areaspline'
                    },         
                    exporting: {
                        enabled: false
                    },
                    yAxis: [{
                    
                        title: {
                            text: null
                        }
                    }]*/
                }
            }]
        }]
    });
  } 
  /* END Transaction summary chart */


  /*Tanks Capacity*/
   genTanksCapChart(categories:any[], dispData:any[]){
       return new Chart({
          chart: {
                type: 'column',
            },
            title: {
                text: 'Cumulative Current Tanks Capacity'
            },
            yAxis: {
                labels: {
                    enabled: true,
                    align: 'right',
                    style: {
                        color: '#999999'
                    }
                },
                title: {
                    text: 'Quanties in Liters',
                    style: {
                        color: '#999999'
                    }
                }
            },
            xAxis: {
                categories: categories /*['Super', 'Gasoil', 'Kerosene']*/,
                labels: {
                    style: {
                        fontSize: '11px',
                        color: '#999999'
                    }
                }
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:,.0f} L',
                        borderRadius: 0,
                        backgroundColor: 'white',
                        color: '{point.color}',
                        borderWidth: 1,
                        y: -6
                    },
                    pointPadding: 0.1,
                    groupPadding: 0.02
                }
            },
            tooltip: {
                enabled: false,
                headerFormat: null,
                pointFormat: '<span style="color:{point.color}">{series.name}: <b>{point.y} </b> L</span><br />'
            },
            series: [{
                    showInLegend: false,
                    colorByPoint: true,
                    borderRadius: '4',
                    name: 'Current Quantity',
                    // colors: ['#057ac0', '#d9d928', '#000000'],
                    data: dispData
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
                                        enabled: false,
                                        align: 'left',
                                        x: 0,
                                        y: -5
                                    },
                                    title: {
                                        text: null
                                    }
                                }],
                            
                            plotOptions: {
                                series: {
                                    dataLabels: {
                                        format: '{point.y:,.0f} L',
                                        style: {
                                            fontSize: '10px',
                                            color: '#999999'
                                        }
                                    },
                                    pointPadding: 0.1,
                                    groupPadding: 0.02
                                }
                            }

                        }
                    }]
            }

      });
   }
  /* END tanks capacity */

    /* Product sales */
      genProductSalesChart(){
          return new Chart({
           chart: {
            type: 'pie',
        },

        title: {
            text: 'Products Sales'
        },

        tooltip: {
            valueDecimals: 1,
            headerFormat: '',
            pointFormat: '<b>{point.name}</b> <br> Sales: <b>{point.y} FRW</b> - thus <b>{point.percentage:.2f} % </b> of all products'
        },

        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer'
            }
        },


        series: [{
            name: 'Products',
            data: [
                { name: 'Super', y: 6552225 },
                { name: 'Gasoil', y: 3026550 },
                { name: 'Kerosene', y: 1566565 }
            ]
        }]
      });
    } 
      /* END product sales */

      /* Individual Tanks Capacity */
      /* TANKS 1 GAUGE */
    genTankChart(){
        return new Chart({
            chart: {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false,
                backgroundColor: null
            },


            title: {
                text: 'Tank 1'
            },


            tooltip: {
                enabled: false
            },


            pane: {
                center: ['50%', '85%'],
                size: '140%',
                startAngle: -90,
                endAngle: 90,
                background: {
                    backgroundColor: '#ffffff',
                    borderWidth: 0,
                    outerRadius: '100%',
                    innerRadius: '30%',
                    shape: 'arc'
                }
            },

            yAxis: {
                min: 0,
                max: 10000,
                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 3,
                minorTickPosition: 'outside',
                minorTickColor: '#666',
                tickPixelInterval: 45,
                tickWidth: 2,
                tickPosition: 'outside',
                tickLength: 5,
                tickColor: '#c0c0c0',
                labels: {
                    step: 2,
                    rotation: 'auto'
                },
                title: {
                    text: 'PMS1',
                    y: -100
                },

                plotBands: [{
                    from: 5000,
                    to: 10000,
                    color: '#55BF3B' //green
                }, {
                    from: 3000,
                    to: 5000,
                    color: '#DDDF0D' //yellow
                }, {
                    from: 0,
                    to: 3000,
                    color: '#DF5353' //red
                }]
            },

            plotOptions: {
                gauge: {
                    dataLabels: {
                        y: 37,
                        borderWidth: 0,
                        useHTML: true,
                        format: '{point.y} Liters',
                        color: '{point.color}'

                    }
                }
            },

            series: [{
                name: 'Quantity',
                data: [7200],
                y: 70,
                x: 2
            }]

        }); 
    }
    /* END TANKS 1 GAUGE */
/* END Individual Tanks Capacity */

}