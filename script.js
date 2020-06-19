function transformText(teks) {
  let regexTest = /[A-Z]/g;

  if (teks.match(regexTest)) {
    return teks.toLowerCase();
  } else {
    return teks.toUpperCase();
  }
}

export default transformText;
