const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const d = document.querySelector(".d");
const question = document.querySelector(".question");
const answer = document.querySelectorAll(".answer");
const result = document.querySelector(".result");
const phone = document.querySelector(".phone");
const audience = document.querySelector(".audience");
const half = document.querySelector(".half");
const gameover = document.querySelector(".gameover");

let activeRound = 0;
let numberOfQuestion = () => `Otázka číslo ${activeRound + 1}: `;

result.textContent = "";

const questions = [
  new Map([
    ["question", "Kolik je 5 + 5 ?"],
    ["a", 5],
    ["b", 10],
    ["c", 2],
    ["d", 8],
    ["correct", "b"],
    [true, "Správně 🎉"],
    [false, "Bohužel 😭"],
  ]),
  new Map([
    ["question", "Jaké je hlavní město ČR ?"],
    ["a", "Brno"],
    ["b", "Praha"],
    ["c", "Bruntál"],
    ["d", "Ostrava"],
    ["correct", "b"],
    [true, "Správně 🎉"],
    [false, "Bohužel 😭"],
  ]),
  new Map([
    ["question", "Jaká je životnost vážky ?"],
    ["a", "20 hodin"],
    ["b", "10 minut"],
    ["c", "24 hodin"],
    ["d", "12 hodin"],
    ["correct", "c"],
    [true, "Správně 🎉"],
    [false, "Bohužel 😭"],
  ]),
  new Map([
    [
      "question",
      "Jak se jmenuje kapela s následujícími členy: John Deacon, Brian May, Freddie Mercury, Roger Taylor ?",
    ],
    ["a", "Beatles"],
    ["b", "Queen"],
    ["c", "Iron Maiden"],
    ["d", "Green Day"],
    ["correct", "b"],
    [true, "Správně 🎉"],
    [false, "Bohužel 😭"],
  ]),
  new Map([
    ["question", "Kde je na světě vystavena Mona Lisa Leonarda da Vinciho ?"],
    ["a", "Berlín, Německo"],
    ["b", "Bratislava, Slovensko"],
    ["c", "Londýn, Anglie"],
    ["d", "Paříž, Francie"],
    ["correct", "d"],
    [true, "Správně 🎉"],
    [false, "Bohužel 😭"],
  ]),
  new Map([
    [
      "question",
      "Která desková hra se skládá z 40 prostor obsahujících 28 nemovitostí, čtyř železnic, dvou utilit, tří prostor šance, tří prostorů společných truhly, luxusního daňového prostoru, prostoru daně z příjmu a čtyř rohových čtverců: GO, vězení, parkování zdarma a Jít do vězení?",
    ],
    ["a", "Osadníci z katanu"],
    ["b", "Dostihy a sázky"],
    ["c", "Monopoly"],
    ["d", "Člověče nezlob se"],
    ["correct", "c"],
    [true, "Správně 🎉"],
    [false, "Bohužel 😭"],
  ]),
  new Map([
    [
      "question",
      "Vlajka které země je jediná na světě, která není obdélníkem nebo čtvercem?",
    ],
    ["a", "Nepál"],
    ["b", "Nový Zéland"],
    ["c", "Keňa"],
    ["d", "Austrálie"],
    ["correct", "a"],
    [true, "Správně 🎉"],
    [false, "Bohužel 😭"],
  ]),
  new Map([
    ["question", "Kdo je často označován jako král latinského popu ?"],
    ["a", "Ricky Martin"],
    ["b", "Luis Fonsi"],
    ["c", "Enrique Inglesias"],
    ["d", "Romeo Santos"],
    ["correct", "c"],
    [true, "Správně 🎉"],
    [false, "Bohužel 😭"],
  ]),
  new Map([
    ["question", "Kolik hráčů je v týmu Water Polo ?"],
    ["a", "5"],
    ["b", "10"],
    ["c", "8"],
    ["d", "7"],
    ["correct", "d"],
    [true, "Správně 🎉"],
    [false, "Bohužel 😭"],
  ]),
  new Map([
    ["question", "Který z nich NENÍ zvíře čínského zvěrokruhu ?"],
    ["a", "Kohout"],
    ["b", "Slon"],
    ["c", "Prase"],
    ["d", "Opice"],
    ["correct", "b"],
    [true, "Správně 🎉"],
    [false, "Bohužel 😭"],
  ]),
];

const _active = ["_0", "_1", "_2", "_3", "_4", "_5", "_6", "_7", "_8", "_9"];

const currentQuestion = function () {
  const currentQ = questions[activeRound];
  const values = [...currentQ.values()];

  question.textContent =
    numberOfQuestion() + questions[activeRound].get("question");
  a.textContent = values[1];
  b.textContent = values[2];
  c.textContent = values[3];
  d.textContent = values[4];
};

currentQuestion();

for (let i = 0; i < answer.length; i++) {
  answer[i].addEventListener("click", function () {
    const currentR = _active[activeRound];
    if (
      answer[i].textContent ===
      String(questions[activeRound].get(questions[activeRound].get("correct")))
    ) {
      if (activeRound === 9) {
        gameover.textContent = "Gratuluji jste nejlepší! 👌🏆🎉";
        gameover.classList.remove("hidden");
        document.body.classList.add("usedHint");
      }
      result.classList.remove("hidden");
      result.textContent = questions[activeRound].get(true);
      answer[i].classList.add("pass");
      answer[i].classList.remove("active");
      document.querySelector(`.${currentR}`).classList.add("active");
    } else {
      result.classList.remove("hidden");
      result.textContent = questions[activeRound].get(false);
      answer[i].classList.add("wrong");
      gameover.classList.remove("hidden");
      document.body.classList.add("usedHint");
    }
  });
}

const removeClasses = function () {
  a.classList.remove("pass");
  b.classList.remove("pass");
  c.classList.remove("pass");
  d.classList.remove("pass");
  a.classList.remove("wrong");
  b.classList.remove("wrong");
  c.classList.remove("wrong");
  d.classList.remove("wrong");
  a.classList.remove("active");
  b.classList.remove("active");
  c.classList.remove("active");
  d.classList.remove("active");
};

result.addEventListener("click", function () {
  result.classList.add("hidden");
  removeClasses();
  if (activeRound < questions.length) {
    activeRound += 1;
    currentQuestion();
  } else {
    gameover.classList.remove("hidden");
    console.log("End of questions");
  }
});

half.addEventListener("click", function () {
  half.classList.add("diag");
  half.classList.add("usedHint");
  ////////////////////////////////////////
  if (
    d.textContent ===
    String(questions[activeRound].get(questions[activeRound].get("correct")))
  ) {
    c.textContent = "";
    b.textContent = "";
  }
  if (
    a.textContent ===
    String(questions[activeRound].get(questions[activeRound].get("correct")))
  ) {
    c.textContent = "";
    b.textContent = "";
  }
  if (
    c.textContent ===
    String(questions[activeRound].get(questions[activeRound].get("correct")))
  ) {
    a.textContent = "";
    d.textContent = "";
  }
  if (
    b.textContent ===
    String(questions[activeRound].get(questions[activeRound].get("correct")))
  ) {
    a.textContent = "";
    d.textContent = "";
  }
});

audience.addEventListener("click", function () {
  audience.classList.add("diag");
  audience.classList.add("usedHint");
  for (let i = 0; i < answer.length; i++) {
    if (
      answer[i].textContent ===
      String(questions[activeRound].get(questions[activeRound].get("correct")))
    ) {
      answer[i].classList.add("active");
    }
  }
});

phone.addEventListener("click", function () {
  phone.classList.add("diag");
  phone.classList.add("usedHint");
  for (let i = 0; i < answer.length; i++) {
    if (
      answer[i].textContent ===
      String(questions[activeRound].get(questions[activeRound].get("correct")))
    ) {
      answer[i].classList.add("active");
    }
  }
});
