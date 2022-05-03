$(document).ready(function () {
  $(".bevestiging").hide();
  $("#knopSubmit").click(function () {
    $(".formulier").hide();
    $(".bevestiging").show();
  });
});
