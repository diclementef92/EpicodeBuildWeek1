const attenzione = (e) => {
  let box = document.querySelector(".checkbox__input")
  if (box.checked === false) {
    alert("WARNING! ACCEPT THE TERMS & CONDITIONS TO CONTINUE!")
  } else {
    window.location.href = "../../questionPage.html"
  }
}
const fatto = (e) => {
  document.getElementById("ester_egg").style.opacity = "100"
}
