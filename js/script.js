var ESC = 27;

var contactsOpenButton = document.querySelector(".contacts--button");
var contactsForm = document.querySelector(".overlay-write");
var popUp = document.querySelector(".pop-up");
var close = document.querySelector(".pop-up-close");
var overlay = document.querySelector(".fixed-overlay");

var form = contactsForm.querySelector(".pop-up__form");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
}
catch (err) {
  isStorageSupport = false;
}

contactsOpenButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsForm.classList.add("modal-show");
  var name = contactsForm.querySelector("[name=user-name]");
  var email = contactsForm.querySelector("[name=e-mail]");

  if (storage) {
    name.value = storage;
    email.focus();
  }
  else {
    name.focus();
  }
});


close.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsForm.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  var name = contactsForm.querySelector("[name=user-name]");
  var email = contactsForm.querySelector("[name=e-mail]");

  if (!name.value || !email.value) {
    evt.preventDefault();

    if (!name.value) {
      name.classList.remove("input-error");
      contactsForm.offsetWidth = contactsForm.offsetWidth;
      name.classList.add("input-error");
    }

    if (!email.value) {
      email.classList.remove("input-error");
      contactsForm.offsetWidth = contactsForm.offsetWidth;
      email.classList.add("input-error");
    }


  }
  else {
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
    }
  }
});


overlay.addEventListener("click", function (evt) {
  if (evt.target === overlay) {
    contactsForm.classList.remove("modal-show");
  }
});


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

bigMap.addEventListener("click", function (evt) {
  if (evt.target === bigMap) {
    bigMap.classList.remove("modal-show");
  }
});

// Slider 

var sliderControls = document.querySelector(".slider-controls");
var sliderNodes = Array.prototype.slice.call(sliderControls.children);
var slides = document.querySelectorAll(".slider-slide");

var changeSlide = function (number) {
  for (var i = 0; i < slides.length; i++) {
    var slide = slides[i];
    slide.classList.add("visually-hidden");
  }

  var selectedSlide = slides[number];
  selectedSlide.classList.remove("visually-hidden");
};

var sliderButtons = document.querySelectorAll(".slider-control");
for (var i = 0; i < sliderButtons.length; i++) {
  var sliderButton = sliderButtons[i];
  sliderButton.addEventListener("click", function (evt) {
    var clickedButton = evt.target;
    var index = sliderNodes.indexOf(clickedButton);
    changeSlide(index);
  });
}


// SMALL SLIDER

var smallSliderControls = document.querySelector(".small-slider-controls");
var smallSliderNodes = Array.prototype.slice.call(smallSliderControls.children);
var smallSlides = document.querySelectorAll(".services--info");
var smallSliderButtons = document.querySelectorAll(".small-slider-control");

var changeSmallSlide = function (number) {
  for (var i = 0; i < smallSlides.length; i++) {
    var slide = smallSlides[i];
    slide.classList.add("visually-hidden");
    var button = smallSliderButtons[i];
    button.classList.remove("small-slider-control__active");
  }

  var selectedSlide = smallSlides[number];
  selectedSlide.classList.remove("visually-hidden");
};

var onSlideCLick = function (evt) {
  var clickedButton = evt.target;
  var index = smallSliderNodes.indexOf(clickedButton);
  changeSmallSlide(index);
  clickedButton.classList.add("small-slider-control__active");
}

for (var i = 0; i < smallSliderButtons.length; i++) {
  var smallSliderButton = smallSliderButtons[i];
  smallSliderButton.addEventListener("click", onSlideCLick);
}