$(document).ready(function() {
  $(".clickable").click(function() {
    $("#theme").toggle();
    $("#theme-hidden").toggle();
  });

  $("button#themedark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-theme");
  });

  $("button#themelight").click(function() {
    $("body").removeClass();
    $("body").addClass("light-theme");
  });

});  
