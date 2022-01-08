// properties page pagination

$(document).ready(function () {
  $("#uploadProperty").show();
  $("#updateProperty").hide();
  $("#updateSite").hide();

  $("#uploadBtn").click(function () {
    $("#uploadProperty").show();
    $("#updateProperty").hide();
    $("#updateSite").hide();
  });
  $("#updateBtn").click(function () {
    $("#uploadProperty").hide();
    $("#updateProperty").show();
    $("#updateSite").hide();
  });
  $("#updateSiteBtn").click(function () {
    $("#uploadProperty").hide();
    $("#updateProperty").hide();
    $("#updateSite").show();
  });
});
