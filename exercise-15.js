function groupAnimals(arr){
  var zoo = []
  var temp = []

  for(var i=0; i<arr.length; i++){
    var cage = []
    var flag = false

    for(var j=0; j<zoo.length;j++){
      if(zoo[j][0][0]===arr[i][0]){
        zoo[j].push(arr[i])
        flag = true
      }
    }

    if(flag==false){
      cage.push(arr[i])
      zoo.push(cage)
    }
  }

  for(var l=zoo.length; l>=0;l--){
    for(var k=0; k<l; k++){
      if(k!=l-1){
        if(zoo[k][0][0]>zoo[k+1][0][0]){
          temp = zoo[k]
          zoo[k] = zoo[k+1]
          zoo[k+1] = temp
        }
      }
    }
  }
    

  return zoo
}
  
  
  
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]