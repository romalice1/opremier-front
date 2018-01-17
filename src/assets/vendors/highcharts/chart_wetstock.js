$(function () {


    /* QUANTITIES SALES DAILY */


    $('#chart_wetstock_variance_monthly').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Variance Wetstock - Monthly'
        },
        xAxis: {
            categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
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
            min: -2.0,
            max: 2.0,
            plotLines: [{
                    value: 0,
                    color: '#000000',
                    width: 3,
                    zIndex: 4,
                    label: {text: ''}
                }],
            title: {
                text: 'Variance Values',
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
            headerFormat: 'Day <strong>{point.key} </strong> <br />',
            pointFormat: '<span style="color:{point.color}">{series.name}: {point.y:,.0f}</span><br />',
            shared: true
        },
        
    plotOptions: {
      column: {
        negativeColor: 'red',
        threshold: 0,
        dataLabels: {
          enabled: true,
          formatter: function() {
           
          }
        }
      }
    },
    
        series: [{
                name: 'Variance',
                color: 'green',
                borderRadius: '4',
                data: [-0.2, -1.9, 0.2, 0.1, 0.9, 0.8, 0.9, 1.3, 1.1, 1.3, 1.6, 1.2, 1.6, 0.9, 0.8, 0.8, 0.7, 1.0, 1.6, 2.0, -1.2, -1.1, -1.6, -2.0, -1.0, -1.0, -0.5, -0.3, 1.0, 1.5, 1.8]

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

