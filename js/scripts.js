function firstLetterCheck(aString) {
  if (!onlyLetters(aString)) {
    console.log("Not alphabet");
  } else {
    let lowerString = aString.toLowerCase();
    let textArray = lowerString.split(" ");
    let outputString = buildOutput(textArray);
    console.log(outputString);
  }
}

function buildOutput(textArray) {
  let finalArray = [];
  for (let i = 0; i < textArray.length; i++) {
    let firstLetter = textArray[i].slice(0, 1);
    let lowerString = textArray[i].toLowerCase();
    if (startWithQ(firstLetter)) {
      let qNewWord = qWord(lowerString);
      finalArray.push(qNewWord);
    } else if (vowelStart(firstLetter)) {

      finalArray.push(lowerString.concat("way"));
    } else {
      let result = getConsonants(lowerString);
      let consLatin = (result.remainder + result.consonants + "ay");
      finalArray.push(consLatin);
    }
  }

  return finalArray.join(" ");
}

function getConsonants(lowerString) {
  let letterArray = lowerString.split("");
  let storeConsonant = [];
  let remainingString = "";
  for (let i = 0; i < letterArray.length; i++) {
    if (letterArray[i] !== "a" && letterArray[i] !== "e" && letterArray[i] !== "i" && letterArray[i] !== "o" && letterArray[i] !== "u") {
      storeConsonant.push(letterArray[i]);
    } else {
      remainingString = lowerString.slice(i);
      break;
    }
  } if (!remainingString) {
    remainingString = "";
  }
  
  return {
    consonants: storeConsonant.join(""),
    remainder: remainingString
  };
}

const vowels = ["a", "e", "i", "o", "u"];
function vowelStart(firstLetter) {
  if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
    return true;
    console.log("Starts with a vowel.");
  } else {
    return false;
    console.log("Starts with a consonant");
  }
}

function onlyLetters(aString) {
  return /^[a-zA-Z\s.,!?'"()-]+$/.test(aString);
}

function startWithQ(firstLetter) {
  if (firstLetter === "q") {
    return true;
  } else {
    return false;
  }
}

function qWord(lowerString) {
  return lowerString.slice(2) + "quay";
}