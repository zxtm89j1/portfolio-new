$(document).ready(function () {
  $(".btn-check").on("click", function () {
    $(".table_tools").removeClass("block");
    $(".table_tools").addClass("hidden");
    $("#" + $(this).data("assigned")).removeClass("hidden");
    console.log($(".table_tools"));
  });

  $("#mobile-toggle").on("click", function () {
    $("#nav-mobile-menu").toggle();
  });

  $("#close").on("click", function () {
    $("#nav-mobile-menu").toggle();
  });

  $(".link-mobile").on("click", function () {
    $("#nav-mobile-menu").toggle();
  });

  


});
