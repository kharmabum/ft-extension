$(function() {
  if ($(".ft-ext-shell").length === 0) {
    var url = chrome.extension.getURL("../ft-ext.html");
    $("body").append("<div class=ft-ext-shell><iframe src='"+ url + "' height='100%' width='100%'></iframe></div>");
    $(".ft-ext-shell").show(300);
  } else {
    $(".ft-ext-shell").toggle(300);
  }
});
