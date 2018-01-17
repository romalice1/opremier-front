$(function() {


    /* BRANCHES SALES*/


    $('#chart_sales_branches').highcharts({
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
                text: 'Sells in FRW',
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
            pointFormat: 'Total Sells: <b>{point.y} FRW</b>'
        },
        series: [{
            name: 'Branches',
            data: [
                ['Branch 1', 15100000],
                ['Branch 2', 25222900],
                ['Branch 3', 24665800],
                ['Branch 4', 14215300],
                ['Branch 5', 12885200],
                ['Branch 6', 12895150],
                ['Branch 7', 11225100],
                ['Branch 8', 11115100],
                ['Branch 9', 11105100],
                ['Branch 10', 1105100],
                ['Branch 11', 11000100]
            ],
            borderRadius: 4,
            color: '#012d90'
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