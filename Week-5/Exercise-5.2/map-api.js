function vowelCount(str) {
  const vowelMap = new Map();
  for (let char of str) {
    if ("aeiou".includes(char.toLowerCase())) {
      if (vowelMap.has(lowerCaseChar)) {
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}

console.log(vowelCount("rhtyhm"));
console.log(vowelCount("TestingVOWELS"));
