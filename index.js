$(document).ready(function () {
  $(".btn-check").on("click", function () {
    $(".table_tools").removeClass("block");
    $(".table_tools").addClass("hidden");
    $("#" + $(this).data("assigned")).removeClass("hidden");
    console.log($(".table_tools"));
  });

  $("#mobile-toggle").on("click", function () {
    $("#mobile-menu-main").toggle();
  });

  $("#close").on("click", function () {
    $("#mobile-menu-main").toggle();
  });

  $(".link-mobile").on("click", function () {
    $("#mobile-menu-main").toggle();
  });
});
