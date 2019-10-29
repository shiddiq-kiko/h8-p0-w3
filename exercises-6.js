function angkaPalindrome(num) {
    var n = num + 1
    var n1 = num
    var b 

    for (n1 = num+1; n != b; n1++){
      b = ''
      var ns = String(n)
      for (var a = (ns.length - 1); a >= 0; a--) {
        b += ns[a]
        }
        if (n == b) {return(n)}
        else {n++}
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  