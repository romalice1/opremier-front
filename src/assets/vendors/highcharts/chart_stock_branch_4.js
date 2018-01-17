$(function() {


    /* PRODUCTS SALES */

    $('#chart_sales_branch_products').highcharts({

        chart: {
            type: 'pie'
        },

        title: {
            text: 'Products Sales'
        },

        tooltip: {
            valueDecimals: 1,
            headerFormat: '',
            pointFormat: '<b>{point.name}</b> <br> Sales: <b>{point.y} FRW</b> - thus <b>{point.percentage:.2f} % </b> of all products'
        },

        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer'
            }
        },


        series: [{
            name: 'Products',
            data: [
                { name: 'Super', color: '#057ac0', y: 6552225 },
                { name: 'Gasoil', color: '#d9d928', y: 3026550 },
                { name: 'Kerosene', color: '#050505', y: 1566565 }
            ]
        }]
    });
    /* PRODUCTS SALES */




});