$(function () {

    /* TANKS CAPACITY */

    $('#chart_stock_tanks_qty').highcharts({
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


});

