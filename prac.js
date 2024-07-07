
function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
      console.log('please enter a string');
      return 'invalid';
    }
    else if (string1.includes(string2) || string2.includes(string1)) {
      return true;
    }
    
    for (let i = 0; i < string1.length; i++) {
      for (let j = i + 1; j <= string1.length; j++) {
        const substring = string1.substring(i, j);
        if (string2.includes(substring)) {
          return true;
        }
      }
    }
  
    return false;
  }
  
  const finder1 = matchFinder('john doe', 'ohn');
  console.log(finder1); // This will output true
  
  const finder2 = matchFinder('horse', 'cat');
  console.log(finder2); // This will output false
  
  const finder3 = matchFinder('john doe', 9);
  console.log(finder3); // This will output 'please enter a string' and 'invalid'
  