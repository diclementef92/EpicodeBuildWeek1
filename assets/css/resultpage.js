// let params = new URLSearchParams(location.search)
// let primoParametro = params.get("giuste") //4
// let max = params.get("max") //12

//let corrette = 60; // risposte corrette
//let totaleRisposte = 100; // risposte totali
let outPercPos; // percentuale risposte positive
let outPercNeg; // percentuale risposte negative
let didYouPass = Boolean; // esito test, + di 60% è passato




// riceve risposte corrette e numero totale domande
const resultsTestConverter = (correct, totalAnswers) => {
  outPercPos = Math.round((correct / totalAnswers) * 100); // calcola percentuale risposte positive
  outPercNeg = Math.round((1 - correct / totalAnswers) * 100);


  const posPercentage = document.querySelector(".percentPos"); // selettore nodo percentuale positiva
  posPercentage.innerText = `${outPercPos}`;


  
  const negPercentage = document.querySelector(".percentNeg"); // calcola percentuale risposte negative
  negPercentage.innerText = `${outPercNeg}`; // selettore nodo percentuale negativa


  //const posQuestion = document.getElementById("posQuestion");
  //negPercentage.innerText = `${outPercPos}/${outPercNeg + outPercPos}`;


  //const negQuestion = document.querySelector("#negQuestion");
  //negPercentage.innerText = `${totaleRisposte-corrette}/${totaleRisposte}`;

  
  if (Math.round(outPercPos) >= 60) { // test passaggio esame + 60%
    didYouPass = true;
  } else if (Math.round(outPercPos) < 60) {
    didYouPass = false;    
    const failedTest = document.querySelector("innerCircle");
    // posPercentage.innerText = ;
  } else {
    return 0;
  }
  console.log(outPercPos, outPercNeg, didYouPass);
  circlePercentAdapter(outPercNeg);
  return 1;
};
console.log(resultsTestConverter(10, 100));

console.log(outPercPos, outPercNeg, didYouPass);

const circlePercentAdapter = (negPercentage) => {
  let degConverter = Math.round(1 - negPercentage * 3.6);
  const circleAcqua = document.querySelector(".color1");
  const circlePink = document.querySelector(".color2");
  const circleBackground = document.querySelector(".color3");
  circlePink.style.transform = `rotate(${1 - degConverter - 46}deg)`;

  if (outPercNeg <= 25) {
    // console.log(`più di 75% di errori! devi proprio riguardare le slide!! ${outPercNeg}% sbagliate`);
  } else if (outPercNeg < 50 && outPercNeg >= 25) {
    console.log(`più di 25, ma meno di 50! bene, ${outPercNeg}% sbagliate`);
    circlePink.style.borderColor = "#d20094 transparent transparent #d20094";
    circleAcqua.style.borderColor = "#00ffff transparent transparent #00ffff";
  } else if (outPercNeg < 75 && outPercNeg >= 50) {
    console.log(`meno di 25! bravissimo solo ${outPercNeg}% sbagliate`);
    circlePink.style.borderColor = "#d20094 transparent transparent #d20094";
    circleAcqua.style.borderColor = "transparent transparent transparent transparent";
    circleBackground.style.borderColor = "#00ffff #d20094 #d20094 #00ffff";
  } else if (outPercNeg < 100 && outPercNeg >= 75) {
    console.log(`più di 50, ma meno di 75! grave insufficienza! ${outPercNeg}% sbagliate`);
    circlePink.style.borderColor = "#d20094 transparent #d20094 #d20094";
    circleAcqua.style.borderColor = "transparent";
    circleBackground.style.borderColor = "#00ffff #d20094 #d20094 #d20094";
  } else if ((outPercNeg = 100)) {
    console.log(`nessuna risposta giusta, forse c'è stato un errore`);
    circlePink.style.borderColor = "#d20094";
    circleAcqua.style.borderColor = "transparent";
    circleBackground.style.borderColor = "#d20094";
  } else {
    return 0;
  }
  return 1;
};

//circlePercentAdapter(outPercNeg);



//variabili più leggibili (non fare combinazioni invertite)

