$(document).ready(function () {
    $("#submit").click(function () {
        if ($("#name").val() == "") {
            alert("please enter name:")
            $("#name").focus();
            return false;
        }
        if ($("#email").val() == "") {
            alert("please enter email:")
            $("#email").focus();
            return false;
        }
        if ($("#mobile").val() == "") {
            alert("please enter mobile no:")
            $("#mobile").focus();
            return false;
        }
        if ($("#password").val() == "") {
            alert("please enter password:")
            $("#password").focus();
            return false;
        }
        if ($("#password1").val() == "") {
            alert("please confirm your password:")
            $("#password1").focus();
            return false;
        }

        let formData = new FormData();
        formData.append("name", $("#name").val());
        formData.append("email", $("#email").val());
        formData.append("mobile", $("#mobile").val());
        formData.append("password", $("#password").val());
        formData.append("password1", $("#password1").val());
        formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val());

        $.ajax({
            url: "/save_user/",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {
                if (res == "10") {
                    alert("Already registered");
                }
                else {
                    alert("Registration successful!!");
                }
                // alert("email Submitted");
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
