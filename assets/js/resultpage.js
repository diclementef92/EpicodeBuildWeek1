let param = new URLSearchParams(location.search)
let correct_answers = param.get("correct_answers")
let questions = param.get("questions")

let outPercPos = 0; // percentuale risposte positive
let outPercNeg = 0; // percentuale risposte negative
let didYouPass = Boolean; // esito test, + di 60% è passato

// riceve risultato test e numero totale domande
//produce percentuali giuste e sbagliate ed esito del test
const resultsTest = (cor, tot) => {
  outPercPos = Math.round((cor / tot) * 100); // calcola percentuale risposte positive
  outPercNeg = Math.round((1 - cor / tot) * 100);
  console.log(" percentuali corrette/sbagliate", outPercPos, outPercNeg)


  const posPercentage = document.querySelector(".percentPos"); // selettore nodo percentuale positiva
  posPercentage.innerText = `${outPercPos}`;


  
  const negPercentage = document.querySelector(".percentNeg"); // calcola percentuale risposte negative
  negPercentage.innerText = `${outPercNeg}`; // selettore nodo percentuale negativa


  const posQuestion = document.getElementById("posQuestion");
  posQuestion.innerText = `${cor}/${tot}`;


  const negQuestion = document.querySelector("#negQuestion");
  negQuestion.innerText = `${tot-cor}/${tot}`;

  
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
  circlePercentage(outPercNeg);
  return 1;
};

// console.log(outPercPos, outPercNeg, didYouPass);

const circlePercentage = (redCircleAmount) => {
  console.log("circlePercentage eseguita");
  let degConv = Math.round(1 - redCircleAmount * 3.6);
  const circleAcqua = document.querySelector(".color1");
  const circlePink = document.querySelector(".color2");
  const circleBackground = document.querySelector(".color3");
  circlePink.style.transform = `rotate(${1 - degConv - 46}deg)`;

  if (outPercNeg <= 25) {
    console.log(`più di 75% di errori! devi proprio riguardare le slide!! ${outPercNeg}% sbagliate`);
  } else if (outPercNeg < 50 && outPercNeg >= 25) {
    console.log(`più di 25, ma meno di 50! bene, ${outPercNeg}% sbagliate`);
    circlePink.style.borderColor = "#d20094 transparent transparent #d20094";
    circleAcqua.style.borderColor = "#00ffff transparent transparent #00ffff";
  } else if (outPercNeg < 75 && outPercNeg >= 50) {
    console.log(`più di 50, ma meno di 75! grave insufficienza! ${outPercNeg}% sbagliate`);
    circlePink.style.borderColor = "#d20094 transparent transparent #d20094";
    circleAcqua.style.borderColor = "transparent transparent transparent transparent";
    circleBackground.style.borderColor = "#00ffff #d20094 #d20094 #00ffff";
  } else if (outPercNeg < 100 && outPercNeg >= 75) {
    console.log(`meno di 25! bravissimo solo ${outPercNeg}% sbagliate`);
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

//resultsTestConverter(correct_answers, questions);
//circlePercentage(outPercNeg);
console.log(resultsTestConverter(correct_answers, questions)); 



//variabili più leggibili (non fare combinazioni invertite)

