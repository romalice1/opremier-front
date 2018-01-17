$(function () {


    /* BRANCHES SALES*/


    $('#chart_bookstocks').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Branches Sales'
        },
        xAxis: {
            type: 'category',
            min: 0,
            max: 10,
            scrollbar: {
                enabled: true
            },
            labels: {
                style: {
                    fontSize: '11px',
                    color: '#999999'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Liters',
                style: {
                    color: '#999999'
                }
            },
            labels: {
                style: {
                    color: '#999999'
                }
            },
            plotLines: [{
                    color: '#FF0000',
                    width: 3,
                    zIndex: 4,
                    value: '20000',
                    label: {
                        text: 'MARGIN: 20,000 Liters',
                        style: {
                            color: '#FF0000'
                        }
                    }
                }]
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Book Stock : <b>{point.y} Liters</b>'
        },
        series: [{
                name: 'Branches',
                data: [
                    ['Branch 1', 15100],
                    ['Branch 2', 25229],
                    ['Branch 3', 25800],
                    ['Branch 4', 15300],
                    ['Branch 5', 12200],
                    ['Branch 6', 12150],
                    ['Branch 7', 15100],
                    ['Branch 8', 11100],
                    ['Branch 9', 15100],
                    ['Branch 10', 15100],
                    ['Branch 11', 11100]
                ],
                borderRadius: 4,
                color: '#000000'
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
    /*  BRANCHES */



});

