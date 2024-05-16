export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return [...array];
  };
  
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  const VOWELS = "aeiou";
  
  // Note: could be adjusted in the future. Currently limited to common consonants to make it easier to solve.
  const CONSONANTS = "bcdfghjklmnpqrstvwxz";
  const COMMON_CONSONANTS = "bcdfghklmnprstvwzy";
  
  const generateRandomFromArray = (array) =>
    array[Math.floor(Math.random() * array.length)];
  
  export const generateRandomLetter = () => generateRandomFromArray(ALPHABET);
  export const generateRandomVowel = () => generateRandomFromArray(VOWELS);
  export const generateRandomCommonConsonant = () =>
    generateRandomFromArray(COMMON_CONSONANTS);
  
  export const generateNUnique = (generator, n) => {
    const generatedList = [];
    for (var i = 0; i < n; i++) {
      let generated = "";
      do {
        generated = generator();
      } while (generatedList.includes(generated));
      generatedList.push(generated);
    }
    return generatedList;
  };
  