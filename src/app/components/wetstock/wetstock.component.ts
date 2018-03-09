import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { ApiService} from '../../services/api/api.service';
import { DateService } from '../../services/dates/date.service';

@Component({
  selector: 'app-wetstock',
  templateUrl: './wetstock.component.html',
  styleUrls: ['./wetstock.component.css']
})
export class WetstockComponent implements OnInit {

    transactionData={};

  constructor(
      private http: HttpClient,
      private api: ApiService,
      private user: UserService,
      private date: DateService) { }

    //URL builder
    getTransUrl(startDate, endDate){
        let vendor = this.user.getUserSession().organization

        return this.api.PRODUCT+"/sales/dealer/"+vendor+"/transactions?start="+startDate+"&end="+endDate
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

    loadComponentData(startDate, endDate){
        this.http.get( this.getTransUrl(startDate,endDate) ).subscribe( res => {
            this.transactionData = res;
        });
    }
 /* QUANTITIES SALES DAILY */        
lossAnalysisChart = new Chart ({
	
        chart: {
            type: 'column'
        },

	title: {
            text: 'Quantities Sales - Daily'
        },
        
        xAxis: {
            categories: ['Branch 1', 'Branch 2', 'Branch 3', 'Branch 4', 'Branch 5', 'Branch 6', 'Branch 7', 'Branch 8', 'Branch 9', 'Branch 10'],
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
            headerFormat: 'Loss at {point.key}<br />',
            pointFormat: '- <span style="color:{series.color}">{series.name}: <b>{point.y:,.0f} L</b></span><br />',
            shared: true
        },
        
        series: [{
            name: 'Super',
			color: '#057ac0',
			// borderRadius: '4',
            data: [2141, 2547, 3212, 3554, 3850, 3776, 4007, 4352, 3914, 3910]

        },{
            name: 'Gasoil',
            color: '#d9d928',
			// borderRadius: '4',
            data: [1141, 1547, 2212, 1554, 2850, 1776, 3007, 2352, 2914, 2910]

        },
        {
            name: 'Kerosene',
          color: '#000000',
			// borderRadius: '4',
            data: [241, 247, 212, 254, 250, 376, 307, 352, 314, 310 ]

        }],
        
	 /*responsive: {
	 	rules: [{
	 		condition: {
	 			maxWidth: 500
	 		},
	 		


	 		chartOptions: {
	 			
		 	chart: {
	            type: 'areaspline'
	        },
	 				 			
	 			exporting: {
	 				enabled: false
	 			},
	 			
	 			yAxis: [{
 				
	 				title: {
	 					text: null
	 				}
	 			}]
	 		}
	 	}]
	 } */
	 
	 
    });
	/* End QUANTITIES SALES DAILY */


	/* BRANCHES SALES*/

    bookStockChart = new Chart({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Branches Sales'
        },
        xAxis: {
            type: 'category',
            min: 0,
            max: 10,
            
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Liters',
                style: {
                    color: '#999999'
                }
            },
            labels: {
                style: {
                    color: '#999999'
                }
            },
            // plotLines: [{
            //         color: '#FF0000',
            //         width: 3,
            //         zIndex: 4,
            //         value: '20000',
            //         label: {
            //             text: 'MARGIN: 20,000 Liters',
            //             style: {
            //                 color: '#FF0000'
            //             }
            //         }
            //     }]
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Book Stock : <b>{point.y} Liters</b>'
        },
        series: [{
                name: 'Branches',
                data: [
                    ['Branch 1', 15100],
                    ['Branch 2', 25229],
                    ['Branch 3', 25800],
                    ['Branch 4', 15300],
                    ['Branch 5', 12200],
                    ['Branch 6', 12150],
                    ['Branch 7', 15100],
                    ['Branch 8', 11100],
                    ['Branch 9', 15100],
                    ['Branch 10', 15100],
                    ['Branch 11', 11100]
                ],
                // borderRadius: 4,
                color: '#000000'
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
    /*  BRANCHES */



}
