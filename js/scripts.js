window.addEventListener("load", function () {
  console.log("Page loaded successfully");
  document.querySelector("form#phrase").addEventListener("submit", handleSubmission);
})

function handleSubmission(event) {
  event.preventDefault();
  const aString = document.querySelector("input#input-text").value;
  const finalResult = firstLetterCheck(aString);
  const pEle = document.createElement("p");
  pEle.append(finalResult);
  document.querySelector("div#output-text").innerHTML = "";
  const outputDiv = document.querySelector("div#output-text");
  outputDiv.append(pEle);
}

function firstLetterCheck(aString) {
  if (!onlyLetters(aString)) {
    console.log("Not alphabet");
  } else {
    let lowerString = aString.toLowerCase();
    let textArray = lowerString.split(" ");
    let outputString = buildOutput(textArray);
    return outputString;
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
function vowelStart(firstLetter) {  //compares first letter to vowel
  if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
    return true;
  } else {
    return false;
  }
}

function onlyLetters(aString) {
  return /^[a-zA-Z\s.,]+$/.test(aString);   //characters left out until this gets built out: !?'"()-
}

function startWithQ(firstLetter) {
  return firstLetter === "q";  //manually setting the booleans here was unneccessary, as this will already eval to true or false
}

function qWord(lowerString) {
  if (lowerString.startsWith("qu")) {  //handle weird edge cases like qatar, qat, qi, etc
    return lowerString.slice(2) + "quay";
  } else {
    return lowerString.slice(1) + "qay";
  }
}