let myRegex = new RegExp("[A-Z]");

function changeSentence(teks) {
  if (teks.match(myRegex)) {
    return teks.toLowerCase();
  } else {
    return teks.toUpperCase();
  }
}

export { changeSentence };
