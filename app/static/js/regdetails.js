$(document).ready(function () {
    $("#create").click(function () {
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

        formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val());

        $.ajax({
            url: "/create_reg_details/",
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


function getRegDetails() {
    let formData = new FormData();
    formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val());

    $.ajax({
        url: "/display_regdetails/",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (res) {
            for (let i = 0; i < res.length; i++)
                $("#table").append("<tr><td>" + res[i].rg_id + "</td><td>" + res[i].rg_name + "</td><td>" + res[i].rg_mobile + "</td><td>" + res[i].rg_email + "</td></tr>");
            console.log(res)
        },
        error: function (error) {
        },
        complete: function () {
        },
    });
}
getRegDetails();

// UPDATE ajax
$(document).ready(function () {
    $("#update").click(function () {
        if ($("#id1").val() == "") {
            alert("Please enter the ID");
            $("#id1").focus();
            return false;
        }
        if ($("#name1").val() == "") {
            alert("Please enter the Name");
            $("#name1").focus();
            return false;
        }
        if ($("#email1").val() == "") {
            alert("Please enter the Email");
            $("#email1").focus();
            return false;
        }
        if ($("#mobile1").val() == "") {
            alert("Please enter the Mobile");
            $("#mobile1").focus();
            return false;
        }

        let formData = new FormData();
        formData.append("id1", $("#id1").val());
        formData.append("name1", $("#name1").val());
        formData.append("email1", $("#email1").val());
        formData.append("mobile1", $("#mobile1").val());

        formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val());

        $.ajax({
            url: "/update_reg_details/",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {
                alert("Reg details updated")
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

//DELETE ajax
$(document).ready(function () {
    $("#delete").click(function () {
        if ($("#id2").val() == "") {
            alert("Please enter the ID");
            $("#id2").focus();
            return false;
        }
        let formData = new FormData();
        formData.append("id2", $("#id2").val());

        formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val());

        $.ajax({
            url: "/delete_reg_details/",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {
                alert("Details deleted")
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