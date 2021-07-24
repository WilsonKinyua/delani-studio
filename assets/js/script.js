$(document).ready(function () {
    $("#contact-form form").submit(function (e) {
        e.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        // Check for empty fields
        if (name == '' || email == '' || message == '') {
            $("#name-error").html("<p class='text-danger'>Please fill in all fields.</p>");
            $("#email-error").html("<p class='text-danger'>Please fill in all fields.</p>");
            $("#message-error").html("<p class='text-danger'>Please fill in all fields.</p>");
        } else {
            $("#name-error").html("");
            $("#email-error").html("");
            $("#message-error").html("");
        }

        // Check for valid email
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (email == '' || !emailReg.test(email)) {
            $("#email-error").html("<p class='text-danger'>Please enter a valid email address.</p>");
        } else {
            $("#email-error").html("");
        }

        // Check for valid name
        var nameReg = /^[a-zA-Z]+$/;
        if (name == '' || !nameReg.test(name)) {
            $("#name-error").html("<p class='text-danger'>Please enter a valid name.</p>");
        } else {
            $("#name-error").html("");
        }
        // add mailchimp
        
        // integrate MailChimp
        // var data = {
        //     "name": name,
        //     "email": email,
        //     "message": message
        // };
        // $.ajax({
        //     type: "POST",
        //     url: "https://api.mailchimp.com/2.0/lists/e9d7b9b8a9/members/",
        //     data: data,
        //     success: function (data) {
        //         // $("#contact-form form").fadeOut();
        //         $("#success-message").fadeIn();
        //     },
        //     error: function (data) {
        //         // $("#contact-form form").fadeOut();
        //         $("#error-message").fadeIn();
        //     }
        // });
    });
});
