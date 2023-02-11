const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const btn = document.getElementById("btn");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const passwordLength = document.getElementById("passwordLength");

const copyButton1 = document.getElementById("copy-button1");
const copyButton2 = document.getElementById("copy-button2");

const copyText1 = copyButton1.getAttribute("data-copy-text");
const copyText2 = copyButton2.getAttribute("data-copy-text");

const checkBox = document.getElementById("toggle-checkbox");

btn.addEventListener("click", function () {
  let password1 = generatePassword(passwordLength, characters);
  let password2 = generatePassword(passwordLength, characters);

  input1.value = password1;
  input2.value = password2;
});

// Copy on click
copyButton1.addEventListener("click", function () {
  navigator.clipboard
    .writeText(input1.value)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
});

copyButton2.addEventListener("click", function () {
  navigator.clipboard
    .writeText(input2.value)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
});

// Generate password function
function generatePassword(passwordLength, characters) {
  let password = "";

  for (i = 0; i < passwordLength.value; i++) {
    let randomPassword = Math.floor(Math.random() * characters.length);
    password += characters[randomPassword];
  }

  return password;
}

function toggleSymbolsAndNumbers() {
  checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
      const onlyLetters = characters.filter(function (element) {
        return element.match(/[a-zA-Z]/);
      });
      console.log(onlyLetters);
    } else {
      return characters;
    }
  });
}

toggleSymbolsAndNumbers();
