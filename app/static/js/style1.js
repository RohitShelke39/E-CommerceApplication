$(document).ready(function () {
    $("#submit").click(function () {
        if ($("#name").val() == "") {
            alert("Please enter name");
            $("#name").focus();
            return false;
        }


        let formData = new FormData();
        formData.append("name", $("#name").val());
        formData.append("email", $("#email").val());
        formData.append("password", $("#password").val());
        formData.append("mobile", $("#mobile").val());
        formData.append("age", $("#age").val());
        formData.append("dob", $("#dob").val());
        formData.append("gender", $("#gender").val());



        formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val());

        $.ajax({
            url: "/display_face/",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {
                if (res == "10") {
                    alert("Already Registered");
                }
                else {
                    alert("Registration successfully!");
                }
            },
            error: function (error) {
                console.log(error);
            },
            complete: function () {
                console.log("Completed")
            }
        });
    });
});