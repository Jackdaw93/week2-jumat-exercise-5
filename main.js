import { changeSentence } from "./script.js";

let button = document.getElementById("btn-input");
let teks = document.getElementById("show");

button.addEventListener("click", function () {
  let kata = document.getElementById("input").value;
  teks.innerHTML = `${changeSentence(kata)}`;
});
