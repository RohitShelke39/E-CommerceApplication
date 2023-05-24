//edit button code makes all input tags readonly as false
$(document).ready(function() {
  $('#edit').click(function() {
    $('.form-control').prop('readonly', false);
  });
});


//save button code makes all input tags readonly as true
$(document).ready(function() {
  $('#save').click(function() {
    $('.form-control').prop('readonly', true);
  });
});