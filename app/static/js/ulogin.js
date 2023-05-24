// user login

$(document).ready(function () {
    $(".error-password").hide();
    $("#submit").click(function () {
        if ($("#email").val() == "") {
            alert("Please enter email");
            $("#email").focus();
            return false;
        }
        let formData = new FormData();
        formData.append("email", $("#email").val());
        formData.append("password", $("#password").val());

        formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val());

        $.ajax({
            url: "/login_user/",
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
                    window.location = '/uindex/';
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
