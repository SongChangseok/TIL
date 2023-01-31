const validAnagram = (target, target2) => {
  if (target.length !== target2.length) return false;

  const counterLookup = {};

  for (const char of target) {
    if (counterLookup[char]) counterLookup[char]++;
    else counterLookup[char] = 1;
  }

  for (const char of target2) {
    if (!counterLookup[char]) return false;
    else counterLookup[char]--;
  }

  return true;
};

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
