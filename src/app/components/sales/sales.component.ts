import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { ApiService} from '../../services/api/api.service';
import { DateService } from '../../services/dates/date.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

    transactionData={};
    walletURl = this.api.WALLET;
    organizationURL = this.api.ORGANIZATION+"/organization_user/user/"
    
    transactionsChart = {}
    salesPerPaymentMethodChart={}

	constructor(
        private http: HttpClient,
        private user: UserService,
        private api: ApiService,
        private date: DateService) { }

    //URL builder
    getSalesUrl(startDate, endDate){
        let vendorId = this.user.getUserSession().organization;
        return this.walletURl+"/transactions/dealer/"+vendorId+"/paymentmethods/start/"+startDate+"/end/"+endDate;
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
        this.loadComponentData( this.date.today(), this.date.today() )
	}

    loadComponentData(start, end){
        this.http.get( this.getSalesUrl(start, end) ).subscribe(
            res => {
                this.transactionData = res;
                this.transactionsChart = this.generateTransactionsChart(0,0);
                this.salesPerPaymentMethodChart = this.genSalesPerPaymentMethodChart(0,0);
        });
    }

	/* TRANSACTIONS time vs AMOUNT */
    generateTransactionsChart(categories, data){
        return new Chart({
              chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'Transactions vs Amount'
            },
            xAxis: [{
                categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                    labels: {
                        format: '{value} FRW',
                        formatter: function() {
                            return this.value / 1000 + 'k';
                        },
                        style: {
                            color: '#042c90'
                        }
                    },
                    title: {
                        text: 'Amount in FRW',
                        style: {
                            color: '#042c90'
                        }
                    }
                },
                { // Secondary yAxis
                    title: {
                        text: 'Transactions',
                        style: {
                            color: '#00a533'
                        }
                    },
                    labels: {
                        format: '{value}',
                        style: {
                            color: '#00a533'
                        }
                    },
                    opposite: true
                }
            ],
            tooltip: {
                headerFormat: 'At <strong>{point.key} hr</strong><br />',
                shared: true
            },
            series: [{
                // showInLegend: false,
                name: 'Transactions',
                type: 'areaspline',
                color: '#0041e4',
                // fillColor: {
                //     linearGradient: {
                //         x1: 1,
                //         y1: 0,
                //         x2: 0,
                //         y2: 1
                //     },
                //     stops: [
                //         // [0, Highcharts.Color('#0041e4').setOpacity(0.7).get('rgba')],
                //         // [1, Highcharts.Color('#ffffff').setOpacity(0).get('rgba')],
                //     ]
                // },
                yAxis: 1,
                data: [5, 7, 10, 20, 50, 58, 40, 70, 77, 80, 150, 270, 286, 380, 410, 480, 750, 900, 950, 700, 650, 550, 50, 10]
            }, {
                // showInLegend: false,
                name: 'Amount',
                type: 'areaspline',
                color: '#00cb3f',
                // fillColor: {
                //     linearGradient: {
                //         x1: 1,
                //         y1: 0,
                //         x2: 0,
                //         y2: 1
                //     },
                //     stops: [
                //         // [0, Highcharts.Color('#00cb3f').setOpacity(0.7).get('rgba')],
                //         // [1, Highcharts.Color('#ffffff').setOpacity(0).get('rgba')],
                //     ]
                // },
                data: [26000, 30000, 80000, 110000, 150000, 200000, 180000, 400000, 580000, 800000, 890000, 750000, 670000, 900000, 980000, 800000, 850000, 1200000, 1100000, 750000, 300000, 200000, 150000, 40000],
                // tooltip: {
                //     valueSuffix: ' FRW'
                // }
            }],
            responsive: [{
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {}
                }]
            }]

        });
    }

	 /* END TRANSACTIONS vs AMOUNT per 24hrs */	


	 /* SALES PER PAYMENT METHODS */
     genSalesPerPaymentMethodChart(categories, data)
     {
         return new Chart({
            title: {
                text: 'Sales Comparison per Payment Method'
            },
            yAxis: {
                labels: {
                    enabled: true,
                    align: 'right',
                    style: {
                        fontSize: '11px',
                        color: '#999999'
                    }
                },
                title: {
                    text: 'Amount in FRW',
                    style: {
                        color: '#999999'
                    }

                }
            },
            xAxis: {
                categories: ['']
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        borderRadius: 0,
                        format: '{point.y:,.0f} FRW',
                        backgroundColor: 'white',
                        color: '{point.color}',
                        borderWidth: 1,
                        y: -6
                    },
                    // pointPadding: 0.1,
                    // groupPadding: 0.02
                }
            },
            tooltip: {
                enabled: false,
                headerFormat: null,
                pointFormat: '<span style="color:{point.color}">{series.name}: <b>{point.y} </b> FRW</span><br />'
            },
            series: [{
                    type: 'column',
                    name: 'CASH',
                    color: '#000000',
                    // borderRadius: 4,
                    data: [4200]
                },
                {
                    type: 'column',
                    name: 'MTN',
                    color: '#ffc508',
                    // borderRadius: 4,
                    data: [2000]
                },
                {
                    type: 'column',
                    name: 'TIGO',
                    color: '#193370',
                    // borderRadius: 4,
                    data: [1500]
                },
                {
                    type: 'column',
                    name: 'AIRTEL',
                    color: '#ec1f27',
                    // borderRadius: 4,
                    data: [1400]
                },
                {
                    type: 'column',
                    name: 'Voucher',
                    color: '#7aaa75',
                    // borderRadius: 4,
                    data: [2000]
                },
                {
                    type: 'column',
                    name: 'Debt',
                    color: '#808080',
                    // borderRadius: 4,
                    data: [200]
                },
                {
                    type: 'column',
                    name: 'Visa',
                    color: '#1a1f71',
                    // borderRadius: 4,
                    data: [1100]
                },
                {
                    type: 'column',
                    name: 'Mastercard',
                    color: '#fcbb37',
                    // borderRadius: 4,
                    data: [1000]
                },
                {
                    type: 'column',
                    name: 'ENGEN Card',
                    color: '#012d90',
                    // borderRadius: 4,
                    data: [2500]
                }, {
                    type: 'pie',
                    name: 'Payments Source',
                    data: [{
                        name: 'Electonic Payments',
                        y: 20,
                        color: '#999999'
                    }, {
                        name: 'Cash Payments',
                        y: 50,
                        color: '#000000'
                    }],

                    tooltip: {
                        enabled: true,
                        backgroundColor: '#FCFFC5',
                        borderColor: 'black',
                        borderRadius: 10,
                        borderWidth: 3,
                        pointFormat: ' <b>{point.name}</b>'
                    },


                    center: ['50%', 35],
                    size: 150,
                    xAxis: {
                        categories: ['']
                    },
                    showInLegend: true,
                    dataLabels: {
                        enabled: true,
                        color: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.0)',
                        borderWidth: 0,
                        distance: -30,
                        format: '{point.percentage:.2f} %',
                        connectorColor: 'grey',
                        connectorWidth: 1

                    }
                }
            ]
        });
     }

	/* END SALES PER PAYMENT METHODS */


}
