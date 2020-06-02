$(document).ready(function() {
  $("div.well").click(function() {
    $(this).children("p.desc").fadeToggle();
  });
});