function balikString(kata){
  var b = new Array(kata)  
  kataBalik = '';
    for(a=kata.length-1 ; a>= 0 ; a--){
      kataBalik += kata[a]
      }
      return kataBalik
  }

  console.log(balikString('hello world!'))