const attenzione = (e) => {
  let box = document.querySelector(".checkbox__input")
  if (box.checked === false) {
    alert("WARNING! ACCEPT THE TERMS & CONDITIONS TO CONTINUE!")
  } else {
    window.location.href = "./questionPage.html"
  }
}
const fatto = (e) => {
  document.getElementById("ester_egg").style.opacity = "100"
  const audio = document.querySelector("audio")
  audio.src = "./assets/audio/Miagolio gatto.mp3"
  audio.type = "audio/mp3"
  audio.play()
}
