$(function() {

    Highcharts.setOptions({
        lang: {
            contextButtonTitle: "click here",
            thousandsSep: ','
        },
        credits: {
            enabled: false
        },
        /*chart: {
         style: {	fontFamily: 'ubuntu'}
         },*/

        animation: {
            duration: 1000,
            easing: 'easeOutBounce'
        },
        navigation: {
            buttonOptions: {
                theme: {
                    // Good old text links
                    style: {
                        color: '#039',
                        textDecoration: 'underline'
                    }
                }
            }
        },
        exporting: {
            enabled: false
        }
    });




    /* TANKS 1 GAUGE */
    Highcharts.chart('tank1', {
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: null
        },
        title: {
            text: ''
        },
        tooltip: {
            enabled: false
        },
        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: '#ffffff',
                borderWidth: 0,
                outerRadius: '100%',
                innerRadius: '30%',
                shape: 'arc'
            }
        },
        yAxis: {
            min: 0,
            max: 10000,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 3,
            minorTickPosition: 'outside',
            minorTickColor: '#666',
            tickPixelInterval: 45,
            tickWidth: 2,
            tickPosition: 'outside',
            tickLength: 5,
            tickColor: '#c0c0c0',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'Liters',
                y: 27
            },
            plotBands: [{
                from: 5000,
                to: 10000,
                color: '#55BF3B' //green
            }, {
                from: 3000,
                to: 5000,
                color: '#DDDF0D' //yellow
            }, {
                from: 0,
                to: 3000,
                color: '#DF5353' //red
            }]
        },


        plotOptions: {
            gauge: {
                dataLabels: {
                    y: -87,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        },
        series: [{
            name: 'Quantity',
            data: [2200],
            y: 70
        }]

    });




    /* TANKS 2 GAUGE */
    Highcharts.chart('tank2', {
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: null
        },
        title: {
            text: ''
        },
        tooltip: {
            enabled: false
        },
        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: '#ffffff',
                borderWidth: 0,
                outerRadius: '100%',
                innerRadius: '30%',
                shape: 'arc'
            }
        },
        yAxis: {
            min: 0,
            max: 15000,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 3,
            minorTickPosition: 'outside',
            minorTickColor: '#666',
            tickPixelInterval: 45,
            tickWidth: 2,
            tickPosition: 'outside',
            tickLength: 5,
            tickColor: '#c0c0c0',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'Liters',
                y: 27
            },
            plotBands: [{
                from: 7500,
                to: 15000,
                color: '#55BF3B' //green
            }, {
                from: 3000,
                to: 7500,
                color: '#DDDF0D' //yellow
            }, {
                from: 0,
                to: 3000,
                color: '#DF5353' //red
            }]
        },
        plotOptions: {
            gauge: {
                dataLabels: {
                    y: -87,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        },
        series: [{
            name: 'Quantity',
            data: [5000],
            y: 70
        }]

    });


    /* TANKS 3 GAUGE */
    Highcharts.chart('tank3', {
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: null
        },
        title: {
            text: ''
        },
        tooltip: {
            enabled: false
        },
        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: '#ffffff',
                borderWidth: 0,
                outerRadius: '100%',
                innerRadius: '30%',
                shape: 'arc'
            }
        },
        yAxis: {
            min: 0,
            max: 11000,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 3,
            minorTickPosition: 'outside',
            minorTickColor: '#666',
            tickPixelInterval: 45,
            tickWidth: 2,
            tickPosition: 'outside',
            tickLength: 5,
            tickColor: '#c0c0c0',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'Liters',
                y: 27
            },
            plotBands: [{
                from: 5500,
                to: 11000,
                color: '#55BF3B' //green
            }, {
                from: 3000,
                to: 5500,
                color: '#DDDF0D' //yellow
            }, {
                from: 0,
                to: 3000,
                color: '#DF5353' //red
            }]
        },
        plotOptions: {
            gauge: {
                dataLabels: {
                    y: -87,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        },
        series: [{
            name: 'Quantity',
            data: [1000],
            y: 70
        }]

    });



});