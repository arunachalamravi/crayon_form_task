$('.sidebarBtn').click(function () {
  $('.sidebar').toggleClass('menu-active');
});

$('.messageleftrowimage').click(function () {
  $('.messagecard3').css({ "display": "block", "transition": "display 5s ease" });
});
$('.propicclosesection').click(function () {
  $('.messagecard3').css({ "display": "none", "transition": "display 5s ease" });
});
$("#inputGroupFile01").change(function (event) {
  RecurFadeIn();
  readURL(this);
});
$("#inputGroupFile01").on('click', function (event) {
  RecurFadeIn();
});
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    var filename = $("#inputGroupFile01").val();
    filename = filename.substring(filename.lastIndexOf('\\') + 1);
    reader.onload = function (e) {
      $('#preview').attr('src', e.target.result);
      $('#preview').hide();
      $('#preview').fadeIn(500);
      // $('.custom-file-label').text(filename);
    }
    reader.readAsDataURL(input.files[0]);
  }
  $(".alert").removeClass("loading").hide();
}
function RecurFadeIn() {
  // FadeInAlert("Wait for it...");
}
function FadeInAlert(text) {
  $(".alert").show();
  // $(".alert").text(text).addClass("loading");
}

$('.notify-btn').on('click', function () {
  $('.notifcation').slideToggle(280);
});
$('#approvebtn').click(function () {
  $('.approve-reject-btn').css('display', 'none');
  $('#approve-text-section').css({ "display": "flex", "align-items": "center" });
});
$('#rejectbtn').click(function () {
  $('.approve-reject-btn').css('display', 'none');
  $('#reject-text-section').css({ "display": "flex", "align-items": "center" });
});


$("form").on("change", ".file-upload-field", function () {
  $(this).parent(".file-upload-wrapper").attr("data-text", $(this).val().replace(/.*(\/|\\)/, ''));
});