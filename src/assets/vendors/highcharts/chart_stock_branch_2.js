$(function () {
	

/* QUANTITIES SALES MONTHLY*/
$('#chart_stock_branch_qty_monthly').highcharts({
	
        chart: {
            type: 'column'
        },

	title: {
            text: 'Quantities Sales - Monthly'
        },
        
        xAxis: {
            categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
            crosshair: true,
            type: 'category',
            labels: {
                rotation: -45,
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
            headerFormat: 'Sold at <strong>Day {point.key}</strong><br />',
            pointFormat: '- <span style="color:{series.color}">{series.name}: <b>{point.y:,.0f} L</b></span><br />',
            shared: true
        },
        
        series: [{
            name: 'Super',
			color: '#057ac0',
			borderRadius: '4',
            data: [2141, 2547, 3212, 3554, 3850, 3776, 4007, 4352, 3914, 3910, 3301, 4050, 4700, 2803, 2915, 3116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

        },{
            name: 'Gasoil',
            color: '#d9d928',
			borderRadius: '4',
            data: [1141, 1547, 2212, 1554, 2850, 1776, 3007, 2352, 2914, 2910, 2301, 2050, 2700, 1803, 1915, 1116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

        },
        {
            name: 'Kerosene',
          color: '#000000',
			borderRadius: '4',
            data: [241, 247, 212, 254, 250, 376, 307, 352, 314, 310, 301, 350, 300, 303, 315, 216, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

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
/* End QUANTITIES SALES MONTHLY */





});

