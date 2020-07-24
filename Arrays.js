// 1.1 IsUnique
//  Space: O(1)
//  Time: O(n)
function isUnique(string) {
  const hashMap = {};

  for (const letter of string) {
    if (!(letter in hashMap)) {
      hashMap[letter] = true;
    } else {
      return false;
    }
  }
  return true;
}

console.log("IsUnique (abcde): " + isUnique("abcde"));
console.log("IsUnique (abcdea): " + isUnique("abcdea"));

// No additional data structures

function isUniqueNoDatastructures(string) {
  const sortedString = [...string].sort((a, b) => a.localeCompare(b)).join("");

  for (let i = 1; i < sortedString.length; i++) {
    if (sortedString.charAt(i - 1) === sortedString.charAt(i)) {
      return false;
    }
  }
  return true;
}

console.log(
  "isUniqueNoDatastructures(abcde): " + isUniqueNoDatastructures("abcde")
);

console.log(
  "isUniqueNoDatastructures(abcdea): " + isUniqueNoDatastructures("abcdea")
);

// 1.2   Space: O(1) Time:O(n)

function isPermutation(string1, string2) {
  const hashMap = {};

  for (const letter of string1) {
    if (!(letter in hashMap)) {
      hashMap[letter] = 1;
    } else {
      hashMap[letter]++;
    }
  }

  const currentMap = {};

  for (const letter of string2) {
    if (!(letter in currentMap)) {
      currentMap[letter] = 1;
    } else {
      currentMap[letter]++;
    }
  }

  return compareHashmaps(hashMap, currentMap);
}

function compareHashmaps(firstMap, secondMap) {
  for (k in firstMap) {
    if (firstMap[k] !== secondMap[k]) {
      return false;
    }
  }
  return true;
}

console.log("isPermutation(abcd, dabc): " + isPermutation("abcd", "dabc"));
console.log("isPermutation(abcd, dafc): " + isPermutation("abcd", "dafc"));

// 1.3   Space: O(1) Time:O(n)

function Urlify(string) {
  for (let i = 0; i < string.length; i++) {
    const letter = string.charAt(i);
    if (letter === " ") {
      string = string.slice(0, i) + "%20" + string.slice(i + 1);
    }
  }
  return string;
}
console.log("Urlify(Mr John Smith): " + Urlify("Mr John Smith"));

// 1.5   Space: O(1) Time:O(n)

function oneAway(string1, string2) {
  const hashMap = {};

  for (const letter of string1) {
    if (!(letter in hashMap)) {
      hashMap[letter] = 1;
    } else {
      hashMap[letter]++;
    }
  }

  const currentMap = {};

  for (const letter of string2) {
    if (!(letter in currentMap)) {
      currentMap[letter] = 1;
    } else {
      currentMap[letter]++;
    }
  }

  return compareHashmapsOneAway(hashMap, currentMap);
}

function compareHashmapsOneAway(firstMap, secondMap) {
  let count = 0;
  for (k in firstMap) {
    if (firstMap[k] !== secondMap[k]) {
      count++;
    }
  }
  return count < 2;
}

console.log("oneAway(pale, ple): " + oneAway("pale", "ple"));
console.log("oneAway(pales, pale): " + oneAway("pales", "pale"));
console.log("oneAway(pale, bale): " + oneAway("pale", "bale"));
console.log("oneAway(pale, bake): " + oneAway("pale", "bake"));

// 1.5   Space: O(1) Time:O(n)

function stringCompression(string) {
  let newString = "";
  let currentCount = 0;

  for (let i = 0; i < string.length - 1; i++) {
    const currentLetter = string.charAt(i);
    const nextLetter = string.charAt(i + 1);
    if (i === string.length - 2) {
      currentCount += 2;
      newString += currentLetter + currentCount;
    } else if (currentLetter === nextLetter) {
      currentCount++;
    } else if (currentLetter !== nextLetter && currentCount === 0) {
      newString += currentLetter + 1;
    } else {
      newString += currentLetter + ++currentCount;
      currentCount = 0;
    }
  }
  return newString;
}

console.log(stringCompression("aabcccccaaa"));
