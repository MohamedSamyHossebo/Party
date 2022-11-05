// Accordion

$('.btn1').click(function () {
    $('.singerContent1').toggle(500)
});
$('.btn2').click(function () {
    $('.singerContent2').toggle(500)
});
$('.btn3').click(function () {
    $('.singerContent3').toggle(500)
});
$('.btn4').click(function () {
    $('.singerContent4').toggle(500)
});

// sidebar

$('.options i').click(function () {
    let boxWidth = $('.optionSide').outerWidth()
    console.log(boxWidth)
    let postion = $('.options').offset().left;
    if (postion == 0) {
        $('.options').css({
            left: `-${boxWidth}px`,
            transition: 'all 1s',
        })
    } else {
        $('.options').css({
            left: `0px`,
            transition: 'all 1s',
        })
    }
});

// smothing scroll

$('a').click(function (e) {

    let selector = $(this).attr('href')

    let sectionOffset = $(selector).offset().top
    $('body,html').animate({
        scrollTop: sectionOffset
    }, 800)
})

// Timer
// 1672523999000
let CountDownDate = new Date("Dec 31, 2022 23:59:59").getTime()
// console.log(CountDownDate);
let counter = setInterval(() => {
    // get Date Now
    let dateNow = new Date().getTime();

    //  The Date Difference Betwwen Now and Count Down Date
    let dateDiff = CountDownDate - dateNow;
    // Get time unites
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(dateDiff % (1000 * 60) / (1000));


    // console.log(days)
    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;

}, 1000);

// Text Area Counter
$(function () {
    var maxText = $('textarea').attr('maxlength'),
    ourMessage= $('.characters');
    
    ourMessage.html(`<p> <span>` + maxText + `</span> Characters Remaining</p><button class="btn d-flex justify-content-center w-100 m-3">Send Message</button>`);

$('textarea').keyup(function(){
    var textLength = $(this).val().length,
    remText = maxText-textLength;
    ourMessage.html(`<p> <span>` + remText + `</span> Characters Remaining</p><button class="btn d-flex justify-content-center w-100 m-3">Send Message</button>`);
    console.log(remText)

})
console.log(maxText);
});
