$(function() {


    /* PRODUCTS SALES */

    $('#chart_sales_products').highcharts({
        chart: {
            type: 'pie',
        },
        title: {
            text: 'Products Sales'
        },
        plotOptions: {
            pie: {
                shadow: false,
                innerSize: '40%',
                center: ['50%', '50%']
            }
        },
        tooltip: {
            valueDecimals: 1,
            headerFormat: '',
            pointFormat: '<b>{point.name}</b> <br> Sales: <b>{point.y} FRW</b> - thus <b>{point.percentage:.2f} % </b> of all products'
        },
        series: [{
            name: 'Products',
            showInLegend: true,
            dataLabels: {
                enabled: true,
                format: '<b style="color:{point.color}">{point.name}</b><br /> {point.percentage:.2f} %',
                connectorColor: 'grey',
                connectorWidth: 1
            },
            data: [
                { name: 'Super', color: '#057ac0', y: 6552225 },
                { name: 'Gasoil', color: '#d9d928', y: 3026550 },
                { name: 'Kerosene', color: '#050505', y: 1566565 }
            ]
        }]



    });
    /* PRODUCTS SALES */




});