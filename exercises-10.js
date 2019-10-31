function perkalianUnik(arr) {
    // you can only write your code here!
    var x = []
    for (var a = 0; a < arr.length; a++){
      x[a] = 1
      for (var b = 0; b < arr.length; b++){
        x[a] *= arr[b]
      }
      x[a] /= arr[a]
    }
    return x
  }
  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]



// hardCode //
// function perkalianUnik(arr) {
// var x = arr
    // if(x.length == 5){
    //   for(a = 0; 0 < x.length; a++){
    //     var b = x[a + 1] * x[a + 2] * x[a + 3]  * x[a + 4]
    //     var c = x[a] * x[a + 2] * x[a + 3]  * x[a + 4]
    //     var d = x[a] * x[a + 1] * x[a + 3]  * x[a + 4]
    //     var e = x[a] * x[a + 1] * x[a + 2]  * x[a + 4]
    //     var f = x[a] * x[a + 1] * x[a + 2]  * x[a + 3]
    //     return [b, c, d, e, f]
    //   }
    // } else if(x.length == 4){
    //   for(a = 0; 0 < x.length; a++){
    //     var b = x[a + 1] * x[a + 2] * x[a + 3]
    //     var c = x[a] * x[a + 2] * x[a + 3]
    //     var d = x[a] * x[a + 1] * x[a + 3]
    //     var e = x[a] * x[a + 1] * x[a + 2]
    //     var f = x[a] * x[a + 1] * x[a + 2]
    //     return [b, c, d, e, f]
    //   }
    // } else if(x.length == 3){
    //   for(a = 0; 0 < x.length; a++){
    //     var b = x[a + 1] * x[a + 2]
    //     var c = x[a] * x[a + 2]
    //     var d = x[a] * x[a + 1]
    //     return [b, c, d]
    //   }
    // }
// }