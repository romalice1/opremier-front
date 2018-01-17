$(function () {


    /* TANKS CAPACITY */

    $('#chart_stock_branch_tanks_qty').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Tanks Capacity'
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
            colorByPoint: true,
            series: {
                animation: {duration: 2000},
            },
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
                    format: '{point.y:,.0f} Liters'
                }
            }
        },
        tooltip: {
            enabled: false,
            headerFormat: null,
            pointFormat: '<span style="color:{point.color}">{series.name}: <b>{point.y} </b> L</span><br />'
        },
        series: [{
                name: 'Full Quantity',
                color: '#e6e6e6',
                borderRadius: '7',
                data: [20600, 11600, 20600]
            }, {
                name: 'Current Quantity',
                colors: [
                    '#137cce',
                    '#137cce',
                    '#eddb11'
                ],
                colorByPoint: true,
                borderRadius: '7',
                data: [15000, 4000, 8000]
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
                            }],
                        plotOptions: {
                            series: {
                                dataLabels: {
                                    format: '{point.y:,.0f}',
                                    style: {
                                        fontSize: '7px',
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

