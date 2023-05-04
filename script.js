const popup = document.querySelector(".popup");

function popUp() {
  popup.classList.add("shown");
}

function closePopUp() {
  popup.classList.remove("shown");
  console.log("clicked");
}
