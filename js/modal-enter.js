var modalWindowWriteUs = document.querySelector(".modal-writeus");

var feedBackButton = document.querySelector(".contacts__button");
var closeModalButton = document.querySelector(".modal-writeus__close-button");

feedBackButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWindowWriteUs.classList.remove("visually-hidden");
});

closeModalButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWindowWriteUs.classList.add("visually-hidden");
});