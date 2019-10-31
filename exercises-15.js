function groupAnimals(animals) {
    // you can only write your code here!
    animals.sort()
    var x = []
    var y = []
    var z = animals[0][0]
    for(a = 0; a < animals.length; a++){
        if(z === animals[a][0]){
            y.push(animals[a])
        } else {
            x.push(y);
            y = [];
            z = animals[a][0];
            y.push(animals[a])
        }
    }
    x.push(y)
    return x
  }

    // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]