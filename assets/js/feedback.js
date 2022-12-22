const illuminazioneStelle = (event) => {
  const stelle = document.querySelectorAll(".votazione svg path");
  /* console.log(event.target); */
  const svgClicked = event.target;
  console.log(svgClicked);

  let index = 0;

  stelle.forEach((n) => n.classList.remove("lumus"));

  for (let i = 0; i < stelle.length; i++) {
    const stella = stelle[i];
    stella.classList.add("lumus");
    if (stella === svgClicked) {
      index = i;
      stella.classList.add("lumus");
      break;
    }
  }
};
/* const svg = document.querySelectorAll(".votazione svg");
svg.forEach((n) => (n.onclick = illuminazioneStelle)); */
