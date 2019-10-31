function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
  var y = arr[1] - arr[0]
  for(a = arr.length-1; a > 0 ; a--){
    var z = arr[a] - arr[a-1]
    if(z == y){
      return true
      } else if(z != y){
        return false
      }
    }
  }

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false