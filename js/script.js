var button=document.querySelector(".button-searh");
var form = document.querySelector(".search-form");
var dateOfArrival = form.querySelector("[name=date-of-arrival]");
var departureDate = form.querySelector("[name=departure-date]");
var adults = form.querySelector("[adults]");
var kids = form.querySelector("[kids]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
}

form.classList.add("hidden");

button.addEventListener("click",function(evt){
  evt.preventDefault();
  form.classList.toggle("hidden");
  dateOfArrival.focus()
}
);

form.addEventListener("submit", function (evt) {
  if (!dateOfArrival.value || !departureDate.value || !adults.value || !kids.value) {
    evt.preventDefault();
    form.classList.remove("modal-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("modal-error");
    console.log("Нужно заполнить данные.")
  } else {
    if (isStorageSupport) {
      localStorage.setItem("dateOfArrival", dateOfArrival.value);
    }
  }
});


