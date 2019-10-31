 
function balikString(kata){ 
  var kataBalik = '';
    for(var a=kata.length-1 ; a>= 0 ; a--){
      if(a % 2 == 0){
      kataBalik += kata[a]}
    }
      return kataBalik
  }

  console.log(balikString('hello world!'))

  // 1. hitung jumlah huruf pada variabel kataBalik
  // 2. jika huruf terletak pada posisi ganjil menuju nomer 4
  // 3. jika huruf terletak pada posisi genap lewati
  // 4. tampilkan huruf tersebut