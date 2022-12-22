const attenzione = (e) => {
  let box = document.querySelector(".checkbox__input")
  if (box.checked === false) {
    alert("ATTENTION! ACCEPT THE TERMS & CONDITIONS TO CONTINUE!")
  } else {
    window.location.href = "../../questionPage.html"
  }
}
