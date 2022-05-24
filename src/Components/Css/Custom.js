// $("#shopLearn").on("click", function () {
//   $("#listOfproducts").slideToggle();
// });

// $("#services").on("click", function () {
//   $("#serv").slideToggle();
// });

// $("#manageAccount").on("click", function () {
//   $("#account").slideToggle();
// });

// $(".appleStore").on("click", function () {
//   $("#stores").slideToggle();
// });

// $("#forBusiness").on("click", function () {
//   $("#business").slideToggle();
// });


// nati's code

if ($(window).width() < 768) {
  $(".footer-links-wrapper").addClass("screen");
} else {
  $(".footer-links-wrapper").removeClass("screen");
}
$(window).on("resize", function () {
  if ($(window).width() < 768) {
    $(".footer-links-wrapper").addClass("screen");
  } else {
    $(".footer-links-wrapper").removeClass("screen");
  }
});
$(document).on("click", ".screen h3", function () {
  $(this).next("ul").slideToggle();
  $(this).toggleClass("expanded");
});
