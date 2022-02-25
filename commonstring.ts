const S1 = "LOS ANGELESO";
const S2 = "LAS VEGASV";

// The output = O, V, N

const commonString = findCommonString(S1, S2);
console.log(commonString);
function findCommonString(S1, S2) {
  const lengthS1 = S1.length;
  const lengthS2 = S2.length;

  let smallString, bigString;
  if (lengthS1 > lengthS2) {
    smallString = S2;
    bigString = S1;
  } else {
    smallString = S1;
    bigString = S2;
  }
  let commonString="";
  for (const char of smallString) {
    if (bigString.includes(char) && char !== " " && !commonString.includes(char)) {
      commonString += char;
    }
  }
  return commonString;
}
