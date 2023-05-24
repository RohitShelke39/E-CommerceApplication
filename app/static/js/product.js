$(document).ready(function () {
    $("#submit").click(function () {
        if ($("#selCategory").val() == "") {
            alert("please enter category:")
            $("#selCategory").focus();
            return false;
        }
        if ($("#selSubCategory").val() == "") {
            alert("please enter sub-category:")
            $("#selSubCategory").focus();
            return false;
        }
        if ($("#prodname").val() == "") {
            alert("please enter product name:")
            $("#prodname").focus();
            return false;
        }
        if ($("#prodesc").val() == "") {
            alert("please enter product description:")
            $("#prodesc").focus();
            return false;
        }
        if ($("#prodprice").val() == "") {
            alert("please enter product price:")
            $("#prodprice").focus();
            return false;
        }
        if ($("#prodimg").val() == "") {
            alert("please enter product iamge:")
            $("#prodimg").focus();
            return false;
        }


        let formData = new FormData();
        let lclFile = document.getElementById("prodimg");
        lclFile1 = lclFile.files[0];
        formData.append("prodimg", lclFile1);
        formData.append("selCategory", $("#selCategory").val());
        formData.append("selSubCategory", $("#selSubCategory").val());
        formData.append("prodname", $("#prodname").val());
        formData.append("prodesc", $("#prodesc").val());
        formData.append("prodprice", $("#prodprice").val());



        formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val());

        $.ajax({
            url: "/add_product/",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {
                if (res == "10") {
                    alert("Product already exist");
                }
                else {
                    alert("Product added successfully!");
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
        if ($("#selSubCategory1").val() == "") {
            alert("Please select the Sub Category");
            $("#selSubCategory1").focus();
            return false;
        }
        if ($("#prodname1").val() == "") {
            alert("please enter product name:")
            $("#prodname1").focus();
            return false;
        }
        if ($("#prodesc1").val() == "") {
            alert("please enter product description:")
            $("#prodesc1").focus();
            return false;
        }
        if ($("#prodprice1").val() == "") {
            alert("please enter product price:")
            $("#prodprice1").focus();
            return false;
        }
        // if ($("#img1").val() == "") {
        //     alert("please enter product iamge:")
        //     $("#img1").focus();
        //     return false;
        // }



        let formData = new FormData();
        formData.append("selCategory1", $("#selCategory1").val());
        formData.append("selSubCategory1", $("#selSubCategory1").val());
        formData.append("prodname1", $("#prodname1").val());
        formData.append("proddesc1", $("#proddesc1").val());
        formData.append("price1", $("#price1").val());
        // formData.append("img1", $("#img1").val());
        formData.append("edit_id", $("#edit_id").val());


        formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val());

        $.ajax({
            url: "/update_product/",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {
                alert("Product details updated")
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


function getproduct() {
    let formData = new FormData();
    formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val());

    $.ajax({
        url: "/display_product/",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (res) {
            for (let i = 0; i < res.length; i++) {
                $("#selCategory").append("<option value='" + res[i].sc_ct_name + "'>" + res[i].sc_ct_name + "</option>");
                $("#selSubCategory").append("<option value='" + res[i].sc_name + "'>" + res[i].sc_name + "</option>");
                $("#selCategory1").append("<option value='" + res[i].sc_ct_name + "'>" + res[i].sc_ct_name + "</option>");
                $("#selSubCategory1").append("<option value='" + res[i].sc_name + "'>" + res[i].sc_name + "</option>");

            }
            // $("#selCategory1").append("<option value='" + res[i].ct_name + "'>" + res[i].ct_name + "</option>");
            console.log(res)
        },
        error: function (error) {
        },
        complete: function () {
        },
    });
}
getproduct();



// function getproduct() {
//     let formData = new FormData();
//     formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val());

//     $.ajax({
//         url: "/display_product/",
//         type: "POST",
//         data: formData,
//         processData: false,
//         contentType: false,
//         success: function (res) {
//             for (let i = 0; i < res.length; i++)
//                 $("#table").append("<tr><td>" + res[i].sc_id + "</td><td>" + res[i].sc_ct_name + "</td><td>" + res[i].sc_name + "</td></tr>");
//             console.log(res)
//         },
//         error: function (error) {
//         },
//         complete: function () {
//         },
//     });
// }
// getproduct();

function getproductDetails() {
    let formData = new FormData();
    formData.append("csrfmiddlewaretoken", $("input[name=csrfmiddlewaretoken]").val());

    $.ajax({
        url: "/display_productDetails/",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (res) {
            for (let i = 0; i < res.length; i++)
                $("#tableData").append("<tr><td>" + res[i].pd_id + "</td><td>" + res[i].pd_category + "</td><td>" + res[i].pd_sub_category + "</td> <td>" + res[i].pd_name + "</td><td>" + res[i].pd_description + "</td><td>" + res[i].pd_price + "</td><td><a class=text-primary data-target=#edit_modal data-toggle=modal href=javascript:void(0); id=edit_row title=View/Edit><i class='fa fa-pencil' onclick='getProductUpdate();'></i> </a><a class=text-danger data-target=#delete_modal data-toggle=modal href=javascript:void(0); id=delete_row title=Delete><i class='fa fa-trash'></i></a></tr>");
            console.log(res)
        },
        error: function (error) {
        },
        complete: function () {
        },
    });
}
getproductDetails();

function getProductUpdate() {
    $("#tableData tr").click(function () {
        var currentRow = $(this).closest("tr");
        var pd_id = currentRow.find("td:eq(0)").text();
        var pd_category = currentRow.find("td:eq(1)").text();
        var pd_sub_category = currentRow.find("td:eq(2)").text();
        var pd_name = currentRow.find("td:eq(3)").text();
        var pd_desc = currentRow.find("td:eq(4)").text();
        var pd_price = currentRow.find("td:eq(5)").text();
        var pd_img = currentRow.find("td:eq(6)").text();

        alert(pd_sub_category);
        $("#selCategory1").val(pd_category);
        $("#selSubCategory1").val(pd_sub_category);
        $("#prodname1").val(pd_name);
        $("#proddesc1").val(pd_desc);
        $("#price1").val(pd_price);
        // $("#img1").val(pd_img);
        $("#edit_id").val(pd_id);
    });
}
