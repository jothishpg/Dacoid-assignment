window.onload = function() {
    if (location.hash) {
        showPage(location.hash);
    } else {
        showPage("#page1");
    }

    window.onhashchange = function() {
        showPage(location.hash);
    };
};

function showPage(pageId) {
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < 7; i++) {
        pages[i].classList.remove('active');
    }
    var page = document.getElementById(pageId.substring(1));
    if (page) {
        page.classList.add('active');
    }
}