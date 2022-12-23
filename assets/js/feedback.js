const illuminazioneStelle = (event) => {
  const stelle = document.querySelectorAll(".votazione svg path");
  const svgClicked = event.target;
  let index = 0;
  stelle.forEach((n) => n.classList.remove("lumus"));

  for (let i = 0; i < stelle.length; i++) {
    const stella = stelle[i];
    stella.classList.add("lumus");
    if (i === stelle.length - 1) {
      borghese();
    } else {
      addioBorghese();
    }
    if (stella === svgClicked) {
      index = i;
      break;
    }
  }
};

const borghese = () => {
  const div = document.querySelector(".votazione");
  const gif = document.createElement("img");
  gif.classList.add("gifBorghese");
  gif.src = "https://64.media.tumblr.com/67d0a611b661efb68e0cfd9396e116b7/tumblr_p2o36oUZIy1tlsda4o1_500.gif";
  gif.alt = "Borghese";
  gif.style.width = "300px";
  gif.style.border = "white solid 1px";
  const audio = document.querySelector("audio");
  audio.src = "./assets/audio/Alessandro-Borghese.mp3";
  audio.type = "audio/mp3";
  div.appendChild(gif);
};

const addioBorghese = () => {
  const gifBorghese = document.querySelector(".gifBorghese");
  /*  const audioBorghese = document.querySelector("audio"); */
  borghese.remove();
};
