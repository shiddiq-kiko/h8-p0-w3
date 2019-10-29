function pasanganTerbesar(num) {
    
    var n = `'${num}'`;
    if(n.length == 8){
      var na = new Array(n.substring(1, 3), n.substring(3, 5), n.substring(5, 7))
      var nab = na.map(Number)
      var nac = nab.sort()
      var nad = nac[2]
      return nad
    } else if(n.length == 10){
      var nb = new Array(n.substring(1, 3), n.substring(2, 4), n.substring(4, 6), n.substring(3, 5), n.substring(4, 6), n.substring(5, 7), n.substring(7, 9))
      var nbb = nb.map(Number)
      var nbc = nbb.sort()
      var nbd = nbc[6]
      return nbd
    }
  }

   // TEST CASES
   console.log(pasanganTerbesar(641573)); // 73
   console.log(pasanganTerbesar(12783456)); // 83
   console.log(pasanganTerbesar(910233)); // 91
   console.log(pasanganTerbesar(71856421)); // 85
   console.log(pasanganTerbesar(79918293)); // 99