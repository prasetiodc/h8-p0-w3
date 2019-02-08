function sorting(arr){
  var abjad = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var display=[]

  //looping animal
  for(var i=0; i<abjad.length; i++){
    var temp = []
    for(var j=0;j<arr.length;j++){
      if(abjad[i]===arr[j][0]){
        display.push(arr[j])        
      }
    }
  }
  return display
}

function groupAnimals(arr){
    var sort =  sorting(arr)
    var inputArr = [[]]
    var urutan = 0

    for(var i=0; i<sort.length; i++){
      // console.log(sort[i][0])
      if(inputArr[0].length==0){
        inputArr[0].push(sort[i])
      }else if(inputArr[urutan][0][0]===sort[i][0]){
          inputArr[urutan].push(sort[i])
      }else{
        urutan++
        inputArr.push([sort[i]])
      }
      // if(sort[i][0]===arr[])
    }
    return inputArr
  }
  
  
  
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]