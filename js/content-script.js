let titles = $('article.markdown-body > *');
$('article.markdown-body').first()[0].style['margin-bottom'] = '1000px'

for (let i = 0, l = titles.length; i < l; i++) {
  titles.eq(i).fadeOut(500);
}

let i = 0;
let prevAnimation = null;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message == "next") {
        titles.eq(i).fadeIn(500);

        if (prevAnimation)
            prevAnimation.stop(true, true);

        prevAnimation = $('html, body').animate({
            scrollTop: titles.eq(i).offset().top - 100
        }, 1000);

        if (i < titles.length-1) i++;
    } else if (request.message == "prev") {
        titles.eq(i).fadeOut(500);

        if (prevAnimation)
            prevAnimation.stop(true, true);

        prevAnimation = $('html, body').animate({
            scrollTop: titles.eq(i-1).offset().top - 100
        }, 1000);

        if (i > 0) i--;
    }
  });

