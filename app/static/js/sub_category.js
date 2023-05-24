$(document).ready(function () {
    $("#submit").click(function () {
        if ($("#selCategory").val() == "") {
            alert("please enter category:")
            $("#selCategory").focus();
            return false;
        }
        if ($("#a_subcategory").val() == "") {
            alert("please enter sub-category:")
            $("#a_subcategory").focus();
            return false;
        }



        let formData = new FormData();
        formData.append("a_sc_category", $("#selCategory").val());
        formData.append("a_subcategory", $("#a_subcategory").val());

        formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val());

        $.ajax({
            url: "/add_subcategory/",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {
                if (res == "10") {
                    alert("SubCategory already exist");
                }
                else {
                    alert("SubCategory added successfully!");
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

// Update
$(document).ready(function () {
    $("#update").click(function () {
        if ($("#selCategory1").val() == "") {
            alert("Please select the Category");
            $("#selCategory1").focus();
            return false;
        }
        if ($("#a_subcategory1").val() == "") {
            alert("Please select the Sub Category");
            $("#a_subcategory1").focus();
            return false;
        }


        let formData = new FormData();
        formData.append("selCategory1", $("#selCategory1").val());
        formData.append("a_subcategory1", $("#a_subcategory1").val());
        formData.append("edit_id", $("#edit_id").val());


        formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val());

        $.ajax({
            url: "/update_subcategory/",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {
                alert("SubCategory details updated")
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

function getsubcategory() {
    let formData = new FormData();
    formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val());

    $.ajax({
        url: "/display_subcategory/",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (res) {
            for (let i = 0; i < res.length; i++) {
                $("#selCategory").append("<option value='" + res[i].ct_name + "'>" + res[i].ct_name + "</option>");
                $("#selCategory1").append("<option value='" + res[i].ct_name + "'>" + res[i].ct_name + "</option>");
            }
            console.log(res)
        },
        error: function (error) {
        },
        complete: function () {
        },
    });
}
getsubcategory();


function getSubcategoryDetails() {
    let formData = new FormData();
    formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val());

    $.ajax({
        url: "/display_SubcategoryDetails/",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (res) {
            for (let i = 0; i < res.length; i++)
                $("#tableData").append("<tr><td>" + res[i].sc_id + "</td><td>" + res[i].sc_ct_name + "</td><td>" + res[i].sc_name + "</td><td><a class=text-primary data-target=#edit_modal data-toggle=modal href=javascript:void(0); id=edit_row title=View/Edit><i class='fa fa-pencil' onclick='getRowsUpdate();'></i> </a><a class=text-danger data-target=#delete_modal data-toggle=modal href=javascript:void(0); id=delete_row title=Delete><i class='fa fa-trash'></i></a></tr>");
            console.log(res)
        },
        error: function (error) {
        },
        complete: function () {
        },
    });
}
getSubcategoryDetails();



function getRowsUpdate() {
    $("#tableData tr").click(function () {
        var currentRow = $(this).closest("tr");
        var sc_id = currentRow.find("td:eq(0)").text();
        var sc_ct_name = currentRow.find("td:eq(1)").text();
        var sc_name = currentRow.find("td:eq(2)").text();
        alert(sc_name);
        $("#selCategory1").val(sc_ct_name);
        $("#a_subcategory1").val(sc_name);
        $("#edit_id").val(sc_id);

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