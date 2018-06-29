var ESC = 27;

var contactsOpen = document.querySelector(".contacts--button");
var contactsForm = document.querySelector(".overlay-write");
var popUp = document.querySelector(".pop-up");
var close = document.querySelector(".pop-up-close");
// var overlay = document.querySelector(".fixed-overlay");

var form = contactsForm.querySelector(".pop-up__form");
var name = contactsForm.querySelector("[name=user-name]");
var email = contactsForm.querySelector("[name=e-mail]");
// var text = contactsForm.querySelector("[name=text-field]")

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}

contactsOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactsForm.classList.add("modal-show");

    if (storage) {
        name.value = storage;
    } else {
        // name.focus();
    }
});


close.addEventListener("click", function(evt) {
    evt.preventDefault();
    contactsForm.classList.remove("modal-show");
    contactsForm.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value) {
        evt.preventDefault();
        contactsForm.classList.remove("modal-error");
        contactsForm.offsetWidth = contactsForm.offsetWidth;
        contactsForm.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", name.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === ESC) {
      if (contactsForm.classList.contains("modal-show")) {
        evt.preventDefault();
        contactsForm.classList.remove("modal-show");
        contactsForm.classList.remove("modal-error");
      }
  }
});



// overlay.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     contactsForm.classList.remove("modal-show");
// });


var map = document.querySelector(".map-open");
var bigMap = document.querySelector(".overlay-map");
var mapCloseButton = document.querySelector(".map-close");

map.addEventListener("click", function (evt) {
    evt.preventDefault();
    bigMap.classList.add("modal-show");
});



mapCloseButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    bigMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === ESC) {
        if (bigMap.classList.contains("modal-show")) {
            evt.preventDefault();
            bigMap.classList.remove("modal-show");
        }
    }
});
