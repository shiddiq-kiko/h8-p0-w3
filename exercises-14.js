function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var kn   = []
    var gp   = []
    var gl   = []
    
     
    for(a = 0; a < arr.length; a++){
        if(arr[a] % 3 === 0){
            kn.push(arr[a])
        } else if(arr[a] % 2 === 0){
            gp.push(arr[a])
        } else if(arr % 2 != 0){
            gl.push(arr[a])
        } 
    }
return [gp, gl, kn]
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]