$(document).ready(function () {


    /*SHOW CUSTOMERS BALANCE*/
    $("#customerslist").on("change", function () {
        $.get("http://41.74.172.132:9000/oltanz/vouchers/merchant_customer/" + $(this).val(), function (data) {
            $("#customerbalance").val(data.accountAmount).mask("999,999,999");
        });
    });


    /*CLICK GENERATE VOUCHERS*/
    $("#generate").click(function () {

        // var id = $("#customerslist").val();
        // var number = $("#qtyof5000").val();
        // $.post("http://41.74.172.132:9000/oltanz/vouchers/vouchers?id=" + id + "&number=" + number + "&amount=5000", function (data) {
        //    alert(data);
        // });
    });



    /*SELECT TO ENTER VOUCHERS QTY*/
    $('#qtyof5000').hide();
    $('#pack5000').on('change', function () {
        if (this.checked) {
            $('#qtyof5000').fadeIn();
        } else {
            $('#qtyof5000').hide();
        }
    });

    $('#qtyof10000').hide();
    $('#pack10000').on('change', function () {
        if (this.checked) {
            $('#qtyof10000').fadeIn();
        } else {
            $('#qtyof10000').hide();
        }
    });

    $('#qtyof20000').hide();
    $('#pack20000').on('change', function () {
        if (this.checked) {
            $('#qtyof20000').fadeIn();
        } else {
            $('#qtyof20000').hide();
        }
    });

    $('#qtyof50000').hide();
    $('#pack50000').on('change', function () {
        if (this.checked) {
            $('#qtyof50000').fadeIn();
        } else {
            $('#qtyof50000').hide();
        }
    });



    /*SHOW VOUCHERS QTY*/
    $("#qtyof5000").on("change", function () {
        $("#show5000").text($(this).val());
    });

    $("#qtyof10000").on("change", function () {
        $("#show10000").text($(this).val());
    });

    $("#qtyof20000").on("change", function () {
        $("#show20000").text($(this).val());
    });

    $("#qtyof50000").on("change", function () {
        $("#show50000").text($(this).val());
    });



    /*HIGHLIGHTS VOUCHERS PACK*/
    $("input.voucher_checkbox").on("click", function () {
        if ($(this).attr("type") === "radio") {
            $(this).parent().siblings().removeClass("checkselected");
        }
        $(this).parent().toggleClass("checkselected");
    });  




});

