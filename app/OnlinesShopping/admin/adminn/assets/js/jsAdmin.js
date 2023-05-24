    function validateEmail(paramEmailID) {
        var filter = /^[0-9a-z.]+\@[a-z0-9]+\.[a-zA-z0-9]{2,4}$/;
        
        if (filter.test(paramEmailID)) {
          return true;
        } else {
          return false;
        }
      }

$("#btn_add").click(function (e) {
  //verification
  if ($("#txtName").val().trim().length < 1) {
    snackbar_error("Please Enter Your Name");
    $("#txtName").focus();
    return false;
  }

  if ($("#txtEmail").val().trim().length < 1) {
    snackbar_error("Please Enter Email");
    $("#txtEmail").focus();
    return false;
  }
  if(!validateEmail($("#txtEmail").val())) {
     snackbar_error("Please Enter valid Email");
     $("#txtEmail").focus();
     return false;
  }

  if ($("#txtMobileNo").val().trim().length < 1) {
    snackbar_error("Please Enter Mobile Number");
    $("#txtMobileNo").focus();
    return false;
  }

  if ($("#txtMobileNo").val().trim().length < 10) {
    snackbar_error("Please Enter 10 Digits Mobile Number");
    $("#txtMobileNo").focus();
    return false;
  }

  if ($("#txtPassword").val().trim().length < 1) {
    snackbar_error("Please Enter Password");
    $("#txtPassword").focus();
    return false;
  }

  if ($("#selRole").val().trim().length < 1) {
    snackbar_error("Please Select Role");
    $("#selRole").focus();
    return false;
  }

  //append data
  var formData = new FormData();
  formData.append("txtName", $("#txtName").val());
  formData.append("txtEmail", $("#txtEmail").val());
  formData.append("txtMobileNo", $("#txtMobileNo").val());
  formData.append("txtPassword", $("#txtPassword").val());
  formData.append("selRole", $("#selRole").val());
  formData.append("action", "add");

  var table = $("#tableData").DataTable();

  $.ajax({
    beforeSend: function () {
      $(".btn .spinner-border").show();
      $("#btn_add").attr("disabled", true);
    },
    url: "backend/process_admin.php",
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    success: function (result) {
      // alert(result);
      if(result.trim() == "10") {
        snackbar_error("Email already Exist, Please Check and Add");
      } else {
        snackbar_success("Admin/Resort Added Successfully");
        // location.reload();
        table.ajax.reload();
        $("#add_modal").modal('hide');
      }
      
    },
    error: function (request, error) {
      console.error(error);
    },
    complete: function () {
      $(".btn .spinner-border").hide();
      $("#btn_add").attr("disabled", false);
    },
  });
});
// var sl_no = 0;
// ADD Testimnials data Table (DONE)
$(document).ready(function () {

  $.fn.dataTableExt.errMode = 'ignore';
  //show data
  var table = $("#tableData").DataTable({
    order: [[0, "desc"]],
    processing: true,
    serverSide: true,
    ajax: "backend/table_admin.php",

    columnDefs: [
    
      {
        targets: [ -1 ],
        data: null,
        defaultContent:
          '<div class="d-flex" style="justify-content: space-evenly;"><a href="javascript:void(0);" id="edit_row" title="View/Edit" data-toggle="modal" data-target="#edit_modal" class="text-primary"> <i class="fas fa-pen"></i></a><a href="javascript:void(0);" title="Delete" data-toggle="modal" data-target="#delete_modal" class="text-danger" id="delete_row"> <i class="far fa-trash-alt"></i></a></div>',
      },
    ],

  });

  table.on( 'draw.dt', function () {
    var PageInfo = $('#tableData').DataTable().page.info();
         table.column(0, { page: 'current' }).nodes().each( function (cell, i) {
            cell.innerHTML = i + 1;
        });
    });

  //Edit Btn click
  $(document).on("click", "#edit_row", function () {

    var data = table.row($(this).parents("tr")).data();
    var formData = new FormData();

    $("#txtName1").val(data[1]);
    $("#txtEmail1").val(data[2]);
    $("#txtMobileNo1").val(data[3]);
    $("#txtPassword1").val(data[4]);
    $("#selRole1").val(data[5]);
    $("#edit_id").val(data[0]);

  });

  $(document).on("click", "#delete_row", function () {

    var data = table.row($(this).parents("tr")).data();
    var formData = new FormData();

    $("#delete_id").val(data[0]);

  });

  //Edit modal submit click
  $(document).on("click", "#btn_update", function () {

    if ($("#txtName1").val().trim().length < 1) {
        snackbar_error("Please Enter Name");
        $("#txtName1").focus();
        return false;
    }

    if ($("#txtEmail1").val().trim().length < 1) {
        snackbar_error("Please Enter Email");
        $("#txtEmail1").focus();
        return false;
    }

    if ($("#txtMobileNo1").val().trim().length < 1) {
        snackbar_error("Please Enter Mobile Number");
        $("#txtMobileNo1").focus();
        return false;
    }

    if ($("#txtPassword1").val().trim().length < 1) {
        snackbar_error("Please Enter Password");
        $("#txtPassword1").focus();
        return false;
    }



    if ($("#selRole1").val().trim().length < 1) {
        snackbar_error("Please Select Role");
        $("#selRole1").focus();
        return false;
    }

    
    var formData = new FormData()
    formData.append("txtName1", $("#txtName1").val());
    formData.append("txtEmail1", $("#txtEmail1").val());
    formData.append("txtMobileNo1", $("#txtMobileNo1").val());
    formData.append("txtPassword1", $("#txtPassword1").val());
    formData.append("selRole1", $("#selRole1").val());
    formData.append("action", "update");
    formData.append("id", $("#edit_id").val());

    var table = $("#tableData").DataTable();

    $.ajax({
      beforeSend: function () {
        $(".btn .spinner-border").show();
        $("#btn_update").attr("disabled", true);
      },
      url: "backend/process_admin.php",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (result) {
        snackbar_success("Admin/User Details Updated Succesfully");
        // location.reload();
        table.ajax.reload();
        $("#edit_modal").modal('hide');
      },
      error: function (request, error) {
        console.error(error);
      },
      complete: function () {
        $(".btn .spinner-border").hide();
        $("#btn_update").attr("disabled", false);
      },
    });
  });

  //Delete work step
  $(document).on("click", "#btn_delete", function () {

    var formData = new FormData();
    formData.append("action", "delete");
    formData.append("id", $("#delete_id").val());

    var table = $("#tableData").DataTable();

    $.ajax({
      beforeSend: function () {
        $(".btn .spinner-border").show();
      },

      url: "backend/process_admin.php",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function () {
        snackbar_success("Admin/User Details deleted succesfully");
        // location.reload();
        table.ajax.reload();
        $("#delete_modal").modal('hide');
      },
      error: function (request, error) {
        console.error(error);
      },
      complete: function () {
        $(".btn .spinner-border").hide();
        // Reset Form
        //$("#view_field_form")[0].reset();
        $(".close").click();
      },
    });
  });

  $(document).on("click", "#add_user", function () {

    $("#txtName").val('');
    $("#txtEmail").val('');
    $("#txtMobileNo").val('');
    $("#txtPassword").val('');
    // $("#selRole").val('');
    $("#selMedium").val('');
    $("#txtName").focus('');

  });
});
