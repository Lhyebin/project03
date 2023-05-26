/* <메인배너 자동 슬라이드>*/
$(function () {
    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,

    });


    // mian_visual 화살표← →
    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    })
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    })




    // <차량 자동 슬라이드>
    $('.productSlide').slick({
        arrows: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    // product 화살표← →
    $('.product .arrows .left').on('click', function () {
        $('.productSlide').slick('slickPrev');
    })
    $('.product .arrows .right').on('click', function () {
        $('.productSlide').slick('slickNext')
    })


});