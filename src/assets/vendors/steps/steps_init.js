var sfw;
$(document).ready(function() {
    sfw = $("#generatevouchers_steps").stepFormWizard({
        height: '350px',
        finishBtn: $(''),
        onNext: function(i) {
            var valid = $("#generatevouchers_steps").parsley().validate('block' + i);
            sfw.refresh();
            return valid;
        },
        onFinish: function() {
            alert('there');
            sfw.addSpinner('finish');
            $('#modal_evouchers').modal('hide');

            setTimeout(function() {
                swal({
                        title: 'Vouchers Generated',
                        html: " - 5 Vouchers of Pack of 5,000 FRW <br /> - 2 Vouchers of Pack of 10,000 FRW",
                        type: 'success',
                        showCancelButton: true,
                        confirmButtonColor: '#2db032',
                        cancelButtonColor: '#d9d9d9',
                        timer: '7000',
                        confirmButtonText: 'View Them'
                    },
                    function() {
                        window.location.href = 'generated_vouchers.xhtml';
                    });
            }, 1000);

            $(".btn_click").click(function() {
                if ($(this).css("transform") == 'none') {
                    $(this).css("transform", "rotate(-180deg)");
                } else {
                    $(this).css("transform", "");
                }
            });
            return false;
        }

    });
});