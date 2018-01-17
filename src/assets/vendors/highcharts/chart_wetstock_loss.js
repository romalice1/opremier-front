$(function () {
       
       	
	
/* QUANTITIES SALES DAILY */

        
$('#chart_lossanalysis').highcharts({
	
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
			borderRadius: '4',
            data: [2141, 2547, 3212, 3554, 3850, 3776, 4007, 4352, 3914, 3910]

        },{
            name: 'Gasoil',
            color: '#d9d928',
			borderRadius: '4',
            data: [1141, 1547, 2212, 1554, 2850, 1776, 3007, 2352, 2914, 2910]

        },
        {
            name: 'Kerosene',
          color: '#000000',
			borderRadius: '4',
            data: [241, 247, 212, 254, 250, 376, 307, 352, 314, 310 ]

        }],
        
	 responsive: {
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
	 }
	 
	 
    });
/* End QUANTITIES SALES DAILY */


});

