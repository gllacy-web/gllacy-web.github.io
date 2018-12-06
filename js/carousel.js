var items = document.querySelectorAll('.js-carousel__slider-item');
var dots = document.querySelectorAll('.js-button');
var arrayItems = [].slice.call(items, 0);
var arrayDots = [].slice.call(dots, 0);

arrayDots.forEach(function(elem, index) {
    elem.addEventListener('click', function(e) {
        if (e) e.preventDefault();
        arrayItems.forEach(function (item) {
            item.classList.remove("visible--item");
        });
        arrayDots.forEach(function (item) {
            item.classList.remove("button--active");
        });
        arrayItems[index].classList.add("visible--item");
        arrayDots[index].classList.add("button--active");
    })
});