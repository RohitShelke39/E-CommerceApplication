// user login

$(document).ready(function () {
    $(".error-password").hide();
    $("#submit").click(function () {
        if ($("#a_email").val() == "") {
            alert("Please enter email");
            $("#a_email").focus();
            return false;
        }
        let formData = new FormData();
        formData.append("email", $("#a_email").val());
        formData.append("password", $("#a_password").val());

        formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val());

        $.ajax({
            url: "/login_admin/",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {
                if (res == "0") {
                    alert("Invalid username or password");
                    $(".error-password").show();

                }
                else {
                    alert("Valid user");
                    window.location = '/aindex/';
                }

            },
            error: function (error) {
                console.log(error);
            },
            complete: function () {
                console.log("completed")
            }
        });
    });
});
