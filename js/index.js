$(document).ready(function() {
  $("#inquiry-link").click(function() {
    scrollToAnchor("inquiry");
  });

  $(".photos").gallerify();

  $(".photos").append('<img src="./images/1.jpg">');
  $(".photos").append('<img src="./images/8.jpg">');
  $(".photos").append('<img src="./images/11.jpg">');
  $(".photos").append('<img src="./images/6.jpg">');
  $(".photos").append('<img src="./images/4.jpg">');
  $(".photos").append('<img src="./images/5.jpg">');
  $(".photos").append('<img src="./images/7.jpg">');
  $(".photos").append('<img src="./images/9.jpg">');
  $(".photos").append('<img src="./images/2.jpg">');
  $(".photos").append('<img src="./images/3.jpg">');
  $(".photos").append('<img src="./images/10.jpg">');

  $(".photos").gallerify.renderAsyncImages();
});

function scrollToAnchor(aid) {
  var aTag = $("a[name='" + aid + "']");
  $("html,body").animate({ scrollTop: aTag.offset().top }, "slow");
}
