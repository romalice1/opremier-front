$(function() {



    /* TRANSACTIONS vs AMOUNT per 24hrs */

    $('#chart_sales_amount_vs_tx').highcharts({
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
            showInLegend: false,
            name: 'Transactions',
            type: 'areaspline',
            color: '#0041e4',
            fillColor: {
                linearGradient: {
                    x1: 1,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, Highcharts.Color('#0041e4').setOpacity(0.7).get('rgba')],
                    [1, Highcharts.Color('#ffffff').setOpacity(0).get('rgba')],
                ]
            },
            yAxis: 1,
            data: [5, 7, 10, 20, 50, 58, 40, 70, 77, 80, 150, 270, 286, 380, 410, 480, 750, 900, 950, 700, 650, 550, 50, 10]
        }, {
            showInLegend: false,
            name: 'Amount',
            type: 'areaspline',
            color: '#00cb3f',
            fillColor: {
                linearGradient: {
                    x1: 1,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, Highcharts.Color('#00cb3f').setOpacity(0.7).get('rgba')],
                    [1, Highcharts.Color('#ffffff').setOpacity(0).get('rgba')],
                ]
            },
            data: [26000, 30000, 80000, 110000, 150000, 200000, 180000, 400000, 580000, 800000, 890000, 750000, 670000, 900000, 980000, 800000, 850000, 1200000, 1100000, 750000, 300000, 200000, 150000, 40000],
            tooltip: {
                valueSuffix: ' FRW'
            }
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
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    yAxis: [{
                        labels: {
                            align: 'left',
                            x: 0,
                            y: -5,
                            style: {
                                fontSize: '7px',
                                color: '#0041e4'
                            }
                        },
                        title: {
                            text: null
                        }
                    }, {
                        labels: {
                            align: 'right',
                            x: 0,
                            y: -5,
                            style: {
                                fontSize: '7px',
                                color: '#00a533'
                            }
                        },
                        title: {
                            text: null
                        }
                    }]
                }
            }]
        }

    });

    /* TRANSACTIONS vs AMOUNT per 24hrs */


});