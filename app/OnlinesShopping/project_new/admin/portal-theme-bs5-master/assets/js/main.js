// var today, datepicker;
// today = new Date(
//   new Date().getFullYear(),
//   new Date().getMonth(),
//   new Date().getDate()
// );

// Loader js
$(".btn .spinner-border").hide();
$(window).on("load", function () {
  $(".se-pre-con").fadeOut("slow");
});

// Snackbar success function
function snackbar_success(str) {
  var x = document.getElementById("snackbar-success");
  x.className = "show";
  x.innerHTML = str;
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

// Snackbar error function
function snackbar_error(str) {
  var x = document.getElementById("snackbar-error");
  x.className = "show";
  x.innerHTML = str;
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

// Add the following code if you want the name of the file appear on select
$(".custom-file-input").on("change", function () {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

//General Input Verification

// i. Allow only numbers for text
function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  return !(charCode > 31 && (charCode < 48 || charCode > 57));
}

// ii. Allow only text
function alphaOnly(event) {
  var key = event.which ? event.which : event.keyCode;
  return (
    (key >= 65 && key <= 90) ||
    key == 8 ||
    (event.charCode >= 97 && event.charCode <= 122) ||
    event.charCode == 32
  );
}

//iii. validateEmail
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

//iv. Valid URL
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

//Gijgo Datepicker

// $("#event-from").datepicker({
//   uiLibrary: "bootstrap4",
//   modal: true,
//   header: true,
//   footer: true,
//   minDate: today,
// });
// $("#event-to").datepicker({
//   uiLibrary: "bootstrap4",
//   modal: true,
//   header: true,
//   footer: true,
//   minDate: today,
// });
// $("#event-validity").datepicker({
//   uiLibrary: "bootstrap4",
//   modal: true,
//   header: true,
//   footer: true,
//   minDate: today,
// });
// $("#edit-event-validity").datepicker({
//   uiLibrary: "bootstrap4",
//   modal: true,
//   header: true,
//   footer: true,
//   minDate: today,
// });
// $("#edit-event-from").datepicker({
//   uiLibrary: "bootstrap4",
//   modal: true,
//   header: true,
//   footer: true,
//   minDate: today,
// });
// $("#edit-event-to").datepicker({
//   uiLibrary: "bootstrap4",
//   modal: true,
//   header: true,
//   footer: true,
//   minDate: today,
// });
// $("#event-date").datepicker({
//   uiLibrary: "bootstrap4",
//   modal: true,
//   header: true,
//   footer: true,
//   minDate: today,
// });

// // Gijgo Timepicker

// $("#start-time").timepicker({
//   uiLibrary: "bootstrap4",
// });
// $("#end-time").timepicker({
//   uiLibrary: "bootstrap4",
// });
// $("#edit-start-time").timepicker({
//   uiLibrary: "bootstrap4",
// });
// $("#edit-end-time").timepicker({
//   uiLibrary: "bootstrap4",
// });
// $("#event-time").timepicker({
//   uiLibrary: "bootstrap4",
// });

//file Input

// Add the following code if you want the name of the file appear on select
$(".custom-file-input").on("change", function () {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

//summernote

// Using summernote inside Nested Bootstrap modal dialogs - modal issue[solved]

$(document)
  .on("show.bs.modal", ".modal", function (event) {
    var zIndex = 100000 + 10 * $(".modal:visible").length;
    $(this).css("z-index", zIndex);
    setTimeout(function () {
      $(".modal-backdrop")
        .not(".modal-stack")
        .first()
        .css("z-index", zIndex - 1)
        .addClass("modal-stack");
    }, 0);
  })
  .on("hidden.bs.modal", ".modal", function (event) {
    $(".modal:visible").length && $("body").addClass("modal-open");
  });

// $(".summernote").summernote({
//   placeholder: "Enter here",
//   tabsize: 2,
//   height: 200,
// });
// $(".summernote_modal").summernote({
//   placeholder: "Enter here",
//   tabsize: 2,
//   height: 300,
//   dialogsInBody: true,
// });

function show(input) {
        // debugger;
        var validExtensions = ['pdf']; //array of valid extensions
        var fileName = input.files[0].name;
        var fileNameExt = fileName.substr(fileName.lastIndexOf('.') + 1);
        if ($.inArray(fileNameExt, validExtensions) == -1) {
            input.type = ''
            input.type = 'file'
            $('#txtImpQue').attr('src',"");
             alert("Only these file types are accepted : "+validExtensions.join(', '));
            // snackbar_error("Only these file types are accepted : "+validExtensions.join(', '));
        }
        else
        {
        if (input.files && input.files[0]) {
            var filerdr = new FileReader();
            filerdr.onload = function (e) {
                $('#txtImpQue').attr('src', e.target.result);
            }
            filerdr.readAsDataURL(input.files[0]);
        }
        }
    }

    function validImage(input) {
        // debugger;
        var validExtensions = ['jpg','png','jpeg']; //array of valid extensions
        var fileName = input.files[0].name;
        var fileNameExt = fileName.substr(fileName.lastIndexOf('.') + 1);
        if ($.inArray(fileNameExt, validExtensions) == -1) {
            input.type = ''
            input.type = 'file'
            $('#txtImage').attr('src',"");
             alert("Only these file types are accepted : "+validExtensions.join(', '));
            // snackbar_error("Only these file types are accepted : "+validExtensions.join(', '));
        }
        else
        {
        if (input.files && input.files[0]) {
            var filerdr = new FileReader();
            filerdr.onload = function (e) {
                $('#txtImage').attr('src', e.target.result);
            }
            filerdr.readAsDataURL(input.files[0]);
        }
        }
    }
   
            var d = new Date();
            var time = d.getHours();
            // alert(time);

            // if (time < 12) {

            //   document.getElementById("date-time").innerHTML = "<b>Good Morning!</b>";
            // }

            // if (time > 12) {

            //   document.getElementById("date-time").innerHTML = "<b>Good afternoon!</b>";
            // }

            // if (time == 12) {

            //   document.getElementById("date-time").innerHTML = "<b>Good afternoon!</b>";
            // }

            // if (time == 4) {

            //   document.getElementById("date-time").innerHTML = "<b>Good Evening!</b>";
            // }
