  function pasanganTerbesar(num) {   
    var n = `'${num}'`;
    var na = []
    var nad
      for(var a = 0 ; a < n.length-3; a++){
      var x = n[a+1]
      var y = n[a+2]
      var z = x + y
      na.push(z) 
      var nab = na.map(Number)
      var nac = nab.sort()
      var nad = nac.pop()    
    } 
   return nad
  }

   // TEST CASES
   console.log(pasanganTerbesar(641573)); // 73
   console.log(pasanganTerbesar(12783456)); // 83
   console.log(pasanganTerbesar(910233)); // 91
   console.log(pasanganTerbesar(71856421)); // 85
   console.log(pasanganTerbesar(79918293)); // 99
