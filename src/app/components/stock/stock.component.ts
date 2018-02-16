import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { HttpClient } from '@angular/common/http';
import { ApiService} from '../../services/api/api.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  productsData = {}; // This obect will contain an array of products

  products = {}

  salesData = {}; 

  constructor(
      private http: HttpClient,
      private api: ApiService
      ) { }

  //URL to transaction history
  salesURL = this.api.WALLET+"/transactions/vendor/1/paymentmethods/start/0/end/0";
  stockURL = this.api.PRODUCT+"/vendor_stock_products";

    ngOnInit() {

        this.http.get( this.stockURL ).subscribe(
            res => {
                console.log(res);
                this.productsData = res;
            });
    }

  /*Transaction summary chart*/
  transSummaryChart = new Chart({
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
			color: '#057ac0',
			// borderRadius: '4',
            data: [2141, 2547, 3212, 3554, 3850, 3776, 4007, 4352, 3914, 3910, 3301, 4050, 4700, 2803, 2915, 3116, 0, 0, 0, 0, 0, 0, 0, 0]

        },
        {
            name: 'Gasoil',
            color: '#d9d928',
			// borderRadius: '4',
            data: [1141, 1547, 2212, 1554, 2850, 1776, 3007, 2352, 2914, 2910, 2301, 2050, 2700, 1803, 1915, 1116, 0, 0, 0, 0, 0, 0, 0, ]

        },
        {
            name: 'Kerosene',
          	color: '#000000',
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
  /* END Transaction summary chart */


  /*Tanks Capacity*/
  tanksCapacityChart = new Chart({
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
            categories: ['Super', 'Gasoil', 'Kerosene'],
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
                colors: ['#057ac0', '#d9d928', '#000000'],
                data: [650000, 400000, 200000]
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
  /* END tanks capacity */

  /* Product sales */
  	productSalesChart = new Chart({
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
                { name: 'Super', color: '#057ac0', y: 6552225 },
                { name: 'Gasoil', color: '#d9d928', y: 3026550 },
                { name: 'Kerosene', color: '#050505', y: 1566565 }
            ]
        }]
  	});
  	/* END product sales */

  	/* Individual Tanks Capacity */
  	/* TANKS 1 GAUGE */
    tank1Chart = new Chart({
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: null
        },


        title: {
            text: ''
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
            y: 70
        }]

    });
    /* END TANKS 1 GAUGE */
/* END Individual Tanks Capacity */


   

}
