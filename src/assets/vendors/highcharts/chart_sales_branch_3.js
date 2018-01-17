$(function() {


    /* SALES PER PAYMENT METHODS */

    $('#chart_sales_branch_per_psp').highcharts({
        title: {
            text: 'Sales Comparison per Payment Method'
        },

        yAxis: {
            labels: {
                enabled: true,
                align: 'right',
                style: {
                    fontSize: '11px',
                    color: '#999999'
                }
            },

            title: {
                text: 'Amount in FRW',
                style: {
                    color: '#999999'
                }

            }
        },

        xAxis: {
            categories: ['']
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    borderRadius: 0,
                    format: '{point.y:,.0f} FRW',
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
            pointFormat: '<span style="color:{point.color}">{series.name}: <b>{point.y} </b> FRW</span><br />'
        },

        series: [{
                type: 'column',
                name: 'CASH',
                color: '#000000',
                borderRadius: 4,
                data: [4200]
            },
            {
                type: 'column',
                name: 'MTN',
                color: '#ffc508',
                borderRadius: 4,
                data: [2000]
            },
            {
                type: 'column',
                name: 'TIGO',
                color: '#193370',
                borderRadius: 4,
                data: [1500]
            },
            {
                type: 'column',
                name: 'AIRTEL',
                color: '#ec1f27',
                borderRadius: 4,
                data: [1400]
            },
            {
                type: 'column',
                name: 'Voucher',
                color: '#7aaa75',
                borderRadius: 4,
                data: [2000]
            },
            {
                type: 'column',
                name: 'Debt',
                color: '#808080',
                borderRadius: 4,
                data: [200]
            },
            {
                type: 'column',
                name: 'Visa',
                color: '#1a1f71',
                borderRadius: 4,
                data: [1100]
            },
            {
                type: 'column',
                name: 'Mastercard',
                color: '#fcbb37',
                borderRadius: 4,
                data: [1000]
            },
            {
                type: 'column',
                name: 'SP CARD',
                color: '#012d90',
                borderRadius: 4,
                data: [2500]
            }, {
                type: 'pie',
                name: 'Payments Source',
                data: [{
                    name: 'Electonic Payments',
                    y: 20,
                    color: '#999999'
                }, {
                    name: 'Cash Payments',
                    y: 50,
                    color: '#000000'
                }],
                tooltip: {
                    valueDecimals: 1,
                    headerFormat: '',
                    pointFormat: ' <b>{point.name}</b>'
                },
                center: ['50%', 35],
                size: 150,
                xAxis: {
                    categories: ['']
                },
                showInLegend: true,
                dataLabels: {
                    enabled: true,
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.0)',
                    borderWidth: 0,
                    distance: -30,
                    format: '{point.percentage:.2f} %',
                    connectorColor: 'grey',
                    connectorWidth: 1

                }
            }
        ],


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