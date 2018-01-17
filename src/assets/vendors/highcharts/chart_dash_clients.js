$(function() {


    /* Top10VoucherCustomers  */
    $('#chart_vouchers_clients').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Top 10 Customers'
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
                text: 'Amount Sold',
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
            pointFormat: '<b>{point.y} FRW</b>'
        },
        series: [{
            name: 'Customers',
            data: [
                ['Customer 1', 351000],
                ['Customer 2', 252229],
                ['Customer 3', 246658],
                ['Customer 4', 142153],
                ['Customer 5', 128852],
                ['Customer 6', 128510],
                ['Customer 7', 112250],
                ['Customer 8', 111100],
                ['Customer 9', 111000],
                ['Customer 10', 110050]
            ],
            borderRadius: 4,
            color: '#d7bb00'
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
        }


    });
    /*  Top10VoucherCustomers */



    /* TopDrivers  */
    $('#chart_vouchers_drivers').highcharts({
        chart: {
            type: 'column'
        },

        title: {
            text: 'Top Drivers'
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
                text: 'Amount',
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
            pointFormat: '<b>{point.y} FRW</b>'
        },
        series: [{
            name: 'Drivers',
            data: [
                ['Driver 1', 351000],
                ['Driver 2', 252229],
                ['Driver 3', 246658],
                ['Driver 4', 142153],
                ['Driver 5', 128852],
                ['Driver 6', 128510],
                ['Driver 7', 112250],
                ['Driver 8', 111100],
                ['Driver 9', 111000],
                ['Driver 10', 110050]
            ],
            borderRadius: 4,
            color: '#8400d7'
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
        }


    });
    /*  Top10VoucherCustomers */

});