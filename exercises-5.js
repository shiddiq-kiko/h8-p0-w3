function palindrome(kata) {
    // you can only write your code here!
     kataBalik = '';
      for(a=kata.length-1 ; a>= 0 ; a--){
        kataBalik += kata[a]
        }
        if(kataBalik == kata){
          return true
        } else {
          return false
        }
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false