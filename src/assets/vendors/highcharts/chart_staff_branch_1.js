$(function () {
	
	
/* TOP TEN SELLER */

        
$('#chart_staff_branch_top10').highcharts({
	
        chart: {
            type: 'column'
        },

	title: {
            text: 'Quantity Sold per Pump Attendant'
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
        		text: 'Quantity in Liters',
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
            pointFormat: '<b>{point.y} Liters</b>'
        },
        
        series: [{
            name: 'Branches',
            data: [
                ['Name 1', 351000],
                ['Name 2', 252229],
                ['Name 3', 246658],
                ['Name 4', 142153],
                ['Name 5', 128852],
                ['Name 6', 128510],
                ['Name 7', 112250],
                ['Name 8', 111100],
                ['Name 9', 111000],
                ['Name 10', 110050]
            ],
            
            borderRadius: 4,
            color: '#012d90'
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
	 					y: -5
	 				},
	 				title: {
	 					text: null
	 				}
	 			}]
	 		}
	 	}]
	 }
	 
	 
    });
/*  BRANCHES */



});

