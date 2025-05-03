(function($) {
    'use strict';

    $("#contact-form").submit(function (e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.

        var form = $(this);
        var actionUrl = "/api/contact-form.php";

        $.ajax({
            type: "POST",
            url: actionUrl,
            data: form.serialize(),
            beforeSend: function () {
                //$(form).addClass('d-none');
                $(".alert-danger").removeClass('d-none');
            },
            success: function (res) {
                $(".alert-success").removeClass('d-none');
                $(".alert-danger").addClass('d-none');
            }
        });

        return false;
    });

    $("#subscribe").submit(function (e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.

        var form = $(this);
        var actionUrl = "/api/subscribe.php";

        $.ajax({
            type: "POST",
            url: actionUrl,
            data: form.serialize(),
            beforeSend: function () {
                $(".alert-danger").removeClass('d-none');
            },
            success: function (res) {
                $(".alert-success").removeClass('d-none');
                $(".alert-danger").addClass('d-none');
            }
        });

        return false;
    });
})(jQuery);