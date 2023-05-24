$(document).ready(function () {
    $(".error-password").hide();
    $("#submit").click(function () {
        if ($("#name").val() == "") {
            alert("Please enter name");
            $("#name").focus();
            return false;
        }
        let formData = new FormData();
        formData.append("email", $("#email").val());
        formData.append("password", $("#password").val());

        formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val());

        $.ajax({
            url: "/display_facelogin/",
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