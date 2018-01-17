$(function() {

$('.minichart_amount').sparkline('html', {    type: 'line',   width: '50',  height: '30',   lineColor: '#012d90',    fillColor: 'transparent',    spotColor: '#ff0000',    minSpotColor: '#000000',    maxSpotColor: '#ff0000',    drawNormalOnTop: true});        
        
$(".minichart_tanks").sparkline('html', { type: 'pie', height: '20', sliceColors: ['#008000','#ff0000'],offset: 60, borderWidth: 0});
   
$('.minichart_pos').sparkline('html',{ type: 'pie', height: '40', sliceColors: ['#008000','#ff0000'] });


});


/* $('.inlinebar').sparkline('html', {    type: 'bar',   width: '50',  height: '30',  colorMap:["#057ac0", "#d0d020", "#000000"]});
 $("pie").sparkline('html', {type: 'pie', height: '30',  colorMap:["red", "green"]} );
	 
	 var range_map = $.range_map({
	    '0': 'red',
	    '10': 'green'
	  })
 $('withrange').sparkline('html',{ type: 'bar',    colorMap: range_map,    chartRangeMin: 0  });
 */