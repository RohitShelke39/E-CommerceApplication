$(document).ready(function () {
    $("#submit").click(function () {
        if ($("#a_name").val() == "") {
            alert("please enter name:")
            $("#a_name").focus();
            return false;
        }
        if ($("#a_email").val() == "") {
            alert("please enter email:")
            $("#a_email").focus();
            return false;
        }
        if ($("#a_mobile").val() == "") {
            alert("please enter mobile no:")
            $("#a_mobile").focus();
            return false;
        }
        if ($("#a_password").val() == "") {
            alert("please enter password:")
            $("#a_password").focus();
            return false;
        }
        if ($("#a_password1").val() == "") {
            alert("please confirm your password:")
            $("#a_password1").focus();
            return false;
        }

        let formData = new FormData();
        formData.append("name", $("#a_name").val());
        formData.append("email", $("#a_email").val());
        formData.append("mobile", $("#a_mobile").val());
        formData.append("password", $("#a_password").val());
        formData.append("password1", $("#a_password1").val());
        formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val());

        $.ajax({
            url: "/save_admin/",
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

// // user login

// $(document).ready(function () {
//     $(".error-password").hide();
//     $("#submit").click(function () {
//         if ($("#email").val() == "") {
//             alert("Please enter email");
//             $("#email").focus();
//             return false;
//         }
//         let formData = new FormData();
//         formData.append("email", $("#email").val());
//         formData.append("password", $("#password").val());

//         formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val());

//         $.ajax({
//             url: "/save_admin/",
//             type: "POST",
//             data: formData,
//             processData: false,
//             contentType: false,
//             success: function (res) {
//                 if (res == "0") {
//                     alert("Invalid username or password");
//                     $(".error-password").show();

//                 }
//                 else {
//                     alert("Valid user");
//                 }

//             },
//             error: function (error) {
//                 console.log(error);
//             },
//             complete: function () {
//                 console.log("completed")
//             }
//         });
//     });
// });
