function targetTerdekat(arr) {
    // you can only write your code here!
    var xKanan = []
    var xKiri = []
    var ar = arr.length
    for(var a = 0; a < arr.length; a++) {
        if(arr[a] === 'o'){
            for(var b = a; b <= arr.length; b++) {
                var x = arr[b]
                xKanan.push(x)
                if(arr[b] === 'x'){
                    return xKanan.length-1                  
                } else if(b === (ar - arr[a].length)) {
                    for(var c = a; c >= 0; c--){
                        if(arr[c] === 'x'){
                            var y = arr[c]
                            xKiri.push(y)
                            return xKiri.length
                            } else if(c === 0) {
                              return 0
                              }
                    }
                } 
            }
        }    
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2