$(document).ready(function () {
    $("#submit").click(function () {
        if ($("#a_category").val() == "") {
            alert("please enter category:")
            $("#a_category").focus();
            return false;
        }


        let formData = new FormData();
        formData.append("a_category", $("#a_category").val());

        formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val());

        $.ajax({
            url: "/add_category/",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {
                if (res == "10") {
                    alert("Category already exist");
                }
                else {
                    alert("Category added successfully!");
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


function getcategory() {
    let formData = new FormData();
    formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val());

    $.ajax({
        url: "/display_category/",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (res) {
            for (let i = 0; i < res.length; i++)
                $("#table").append("<tr><td>" + res[i].ct_id + "</td><td>" + res[i].ct_name + "</td></tr>");
            console.log(res)
        },
        error: function (error) {
        },
        complete: function () {
        },
    });
}
getcategory();

function getCategoryDetails() {
    let formData = new FormData();
    formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val());

    $.ajax({
        url: "/display_CategoryDetails/",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (res) {
            for (let i = 0; i < res.length; i++)
                $("#tableData").append("<tr><td><center>" + res[i].ct_id + "</center></td><td><center>" + res[i].ct_name + "</center></td><td><center><a class=text-primary data-target=#edit_modal data-toggle=modal href=javascript:void(0); id=edit_row title=View/Edit><i class='fa fa-pencil' onclick='getRowsUpdate();'></i> </a><a class=text-danger data-target=#delete_modal data-toggle=modal href=javascript:void(0); id=delete_row title=Delete><i class='fa fa-trash'></i></center></a></tr>");
            console.log(res)
        },
        error: function (error) {
        },
        complete: function () {
        },
    });
}
getCategoryDetails();

function getRowsUpdate() {
    $("#tableData tr").click(function () {
        var currentRow = $(this).closest("tr");
        var lclID = currentRow.find("td:eq(0)").text();
        var lclName = currentRow.find("td:eq(1)").text();
        var lclSubName = currentRow.find("td:eq(2)").text();
        alert(lclName);
        $("#selCategory1").val(lclName);
        $("#a_subcategory1").val(lclSubName);
        $("#edit_id").val(lclID);

    });
}

function getRowsDelete() {
    $("#tableData tr").click(function () {
        var currentRow = $(this).closest("tr");
        var lclID = currentRow.find("td:eq(1)").text();
        // alert(lclID);
        $("#delete_id").val(lclID);

    });
}