$(document).ready(function () {
    $("#contact-form form").submit(function (e) {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        console.log(typeof name);
        e.preventDefault();
    });
});