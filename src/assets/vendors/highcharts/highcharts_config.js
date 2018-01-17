$(function () {

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


        navigation: {
            buttonOptions: {
                theme: {
                    style: {
                        color: '#039',
                        textDecoration: 'underline'
                    }
                }
            }
        },
        exporting: {
            buttons: {
                contextButton: {
                    enabled: false
                },
                exportButton: {
                    symbol: 'url(assets/plugins/highcharts/download.png)',
                    symbolX: 20,
                    symbolY: 18,
                    theme: {
                        fill: '#fff',
                        stroke: '#fff',
                        symbolStrokeWidth: 1,
                        states: {
                            hover: {
                                fill: '#00ff00',
                                stroke: '#000000'
                            },
                            select: {
                                fill: '#f1073af',
                                stroke: '#f1073af'
                            }
                        }
                    },
                    menuItems: Highcharts.getOptions().exporting.buttons.contextButton.menuItems.splice(2),
                    onclick: function () {
                        this.exportChart();
                    }
                },
                printButton: {
                    symbol: 'url(assets/plugins/highcharts/print.png)',
                    symbolX: 20,
                    symbolY: 18,
                    theme: {
                        fill: '#fff',
                        stroke: '#fff',
                        symbolStrokeWidth: 1,
                        states: {
                            hover: {
                                fill: '#000000',
                                stroke: '#000000'
                            },
                            select: {
                                fill: '#f1073af',
                                stroke: '#f1073af'
                            }
                        }
                    },
                    onclick: function () {
                        this.print();
                    }
                }

            }
        }


    });

});