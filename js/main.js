// properties page pagination

$(document).ready(function () {
  $("#div1").show();
  $("#div2").hide();
  $("#div3").hide();

  $("#pd1").click(function () {
    $("#div1").show();
    $("#div2").hide();
    $("#div3").hide();
  });
  $("#pd2").click(function () {
    $("#div2").show();
    $("#div1").hide();
    $("#div3").hide();
  });
  $("#pd3").click(function () {
    $("#div3").show();
    $("#div1").hide();
    $("#div2").hide();
  });
});
