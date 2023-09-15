$(".sm-header__burger").click(function () {
    $('.sm-body__menu').toggleClass('sm-body__toggle');
    $('.sm-body__content__overlay').toggleClass('sm-body__content__overlay__toggle');
});

$(".sm-body__content__overlay").click(function () {
    $('.sm-body__menu').toggleClass('sm-body__toggle');
    $('.sm-body__content__overlay').toggleClass('sm-body__content__overlay__toggle');
});