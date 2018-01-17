$(function () {


    /* VouchersUsage */

    $('#chart_vouchers_usage').highcharts({
        chart: {
            type: 'pie',
            margin: '0',
            backgroundColor: 'transparent'
        },
        title: {
            text: 'Vouchers Usage'
        },
        legend: {
            enabled: true,
            align: 'left',
            layout: 'vertical',
            verticalAlign: 'middle',
            x: 0,
            y: 0,
            symbolHeight: '2px',
            useHTML: true,
            labelFormatter: function () {
                return '<div style="display:block;width:150px;height:100px;margin-top:20px; border-radius:4px; border:1px solid ' + this.color + '; background-color:#ffffff;"><div style="display:block;text-align:center; width:150px;padding:5px;font-size:10px;color:#000000;text-transform:uppercase;">' + this.name + '</div> <div style="display:block;text-align:center;padding:17px;width:150px;font-size:30px;color:' + this.color + '">' + Highcharts.numberFormat(this.y, 0, '.', ',') + '</div></div>';
            }
        },
        plotOptions: {
            pie: {
                size: '80%',
                shadow: false,
                innerSize: '50%',
                center: ['70%', '50%']
            }
        },
        tooltip: {
            valueDecimals: 1,
            headerFormat: '',
            pointFormat: '{point.name}: <b>{point.percentage:.2f} % </b>'
        },
        series: [{
                name: 'Numbers',
                showInLegend: true,
                dataLabels: {
                    enabled: false
                },
                data: [
                    {name: 'Available', color: '#2db032', y: 80},
                    {name: 'Redeemed', color: '#b9b9b9', y: 20}

                ]
            }],
        responsive: {
            rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            enabled: false
                        },
                        tooltip: { enabled: false },
                        
                        plotOptions: {
                            pie: {
                                size: '70%',
                                shadow: false,
                                innerSize: '50%',
                                center: ['50%', '50%']
                            }  
                        },
                        
                        series: [{
                                name: 'Numbers',
                                showInLegend: true,
                                dataLabels: {
                                    enabled: true,
                                    format: '<b style="color:{point.color}">{point.name}</b><br /> <b>{point.percentage:.0f} % </b>',
                                    connectorColor: 'grey',
                                    connectorWidth: 1
                                }
                            }],
                        subtitle: {
                            text: null
                        },
                        credits: {
                            enabled: false
                        }
                    }
                }]
        }

    });

    /* VoucherUsage */




});

