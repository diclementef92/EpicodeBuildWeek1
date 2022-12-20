const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
// questions {
//  corretta: boolean ;
// }
// answers {
//   risposte_corrette: 12
//   risposte_totale: 20
//   punteggio: 12
// }
const answers = {
  correct_answers: 0,
  questions: questions.length,
  punteggio: 0,
};

window.onload = function () {
  // TIPS:
  // SE MOSTRI TUTTE LE RISPOSTE ASSIEME IN FORMATO LISTA:
  // Per ogni domanda, crea un container e incorporale tutte all'interno.
  // Crea poi dei radio button
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
  // con le risposte corrette e incorrette come opzioni
  // (dovrai probabilmente cercare su un motore di ricerca come ottenere un valore da un radio button in JS per ottenere il punteggio finale)
  //
  // SE MOSTRI UNA DOMANDA ALLA VOLTA:
  // Mostra la prima domanda con il testo e i radio button.
  // Quando l'utente seleziona una risposta, passa alla domanda successiva dell'array e sostituisci quella precedentemente visualizzata
  // con quella corrente,
  // salvando le risposte dell'utente in una variabile

  let totalQuestionNumber = document.querySelector(".question-tot");
  totalQuestionNumber.innerText = " / " + questions.length;

  let questionIndex = 0;
  //calcola numero intero casuale da 0 a max escluso [0,max)
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  //passaggio alla pagina successiva
  const gotoResultsPage = function () {
    window.location.assign(
      "./prova.html?correct_answers=" +
        answers.correct_answers +
        "&tot_questions=" +
        answers.questions
    );
  };

  //set timer
  let counter = 60;
  const myTimer = function () {
    const timer = document.querySelector(".timer");
    timer.innerText = counter--;
  };
  window.setInterval(myTimer, 1000);

  //caricamento e visualizzazione domanda (question) e opzioni (options)
  const newQuestion = function (index) {
    const optionsNodes = document.querySelectorAll(".option");
    const question = document.querySelector(".titolo");
    const questionText = questions[index].question;
    let options = [];

    if (questions[index].type !== "boolean") {
      options = questions[index].incorrect_answers;
      let optionCorrect = questions[index].correct_answer;
      let randomIndex = getRandomInt(options.length); //lenght va da 2 a 4 -> random va da 0 a 3
      options.splice(randomIndex, 0, optionCorrect); // aggiungo la risposta corretta ad un indice casuale
      // console.log(options);
    } else {
      options = ["True", "False"];
    }
    optionsNodes.forEach((option, i) => {
      question.innerHTML = questionText;
      if (options[i]) {
        //rendo visibile elemento option
        option.style.cssText = "visibility: visible";
        option.innerText = options[i];
      } else {
        //rendo nascosto elemento option
        option.style.cssText = "visibility: hidden";
      }
      option.onclick = handleAnswer;
    });

    //aggiorna question number
    let questionNumber = document.querySelector(".question-num");
    questionNumber.innerText = index + 1;
  };

  const handleAnswer = function (e) {
    // console.log("hai cliccato", e.srcElement.innerText);
    /* se risposta corretta è uguale a quella cliccata*/
    if (e.srcElement.innerText === questions[questionIndex].correct_answer) {
      answers.correct_answers++;
      answers.punteggio++;
    }
    questionIndex++;

    //se ci sono ancora domande
    if (questionIndex < questions.length) {
      newQuestion(questionIndex);
    } else {
      //altrimenti
      gotoResultsPage();
      console.log(answers);
    }
  };
  newQuestion(0);

  //// stelle
  // let stelle = document.querySelectorAll(".stelle i");
  // stelle.forEach((stella,i) => {
  //   stella.onmouseover = () => {
  //     stella.style.cssText = "color: aqua;";
  //
  //   };
  //   stella.onmouseleave = () => {
  //     stella.style.cssText = "";
  //   };
  // });
  ////
  //ester-egg

  // fine window.onLoad()
};

//cat-img
const clickLogo = function () {
  const logo = document.querySelector(".logo");
  const img = document.createElement("img");
  img.src = "./assets/img/cat.webp";
  img.style.width = "50px";
  img.style.display = "right";
  logo.appendChild(img);
};
// Come calcolare il risultato? Hai due strade:
// Se stai mostrando tutte le domande nello stesso momento, controlla semplicemente se i radio button selezionati sono === correct_answer
// Se stai mostrando una domanda alla volta, aggiungi semplicemente un punto alla variabile del punteggio che hai precedentemente creato SE la risposta selezionata è === correct_answer

// BUON LAVORO 💪🚀
