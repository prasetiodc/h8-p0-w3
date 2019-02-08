function targetTerdekat(arr){
  var jarak = 0
  for(var i=0; i<arr.length; i++){
    if(arr[i]==='o'){
      //mengecek sesudah
      for(var j=i; j<arr.length; j++){
        var temp = 0
        if(arr[j]==='x'){
          if(jarak==0){
            jarak = j - i
          }
          temp = j - i
          if(jarak>temp){
            jarak = temp
          }
        }
      }
      //mengecek sebelum  
      for(var k=i; k>=0;k--){
        var temp = 0
        if(arr[k]==='x'){
          if(jarak==0){
            jarak = i - k
          }
          temp = i - k
          if(jarak>temp){
            jarak = temp
          }
        }
      }
    }
  }
  return jarak
}


// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
