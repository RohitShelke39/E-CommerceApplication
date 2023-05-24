$(document).ready(function () {
    $("#submit").click(function () {
        if ($("#name").val() == "") {
            alert("Please enter name");
            $("#name").focus();
            return false;
        }
        if ($("#mobile").val() == "") {
            alert("Please enter Mobile No!");
            $("#mobile").focus();
            return false;
        }
        if ($("#email").val() == "") {
            alert("Please enter Mobile No!");
            $("#email").focus();
            return false;
        }
        let formData = new FormData();
        formData.append("name", $("#name").val());
        formData.append("mobile", $("#mobile").val());
        formData.append("email", $("#email").val());


        formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val());

        $.ajax({
            url: "/display_name/",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {
                alert("Data submitted")
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