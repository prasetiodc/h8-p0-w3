function tentukanDeretAritmatika(arr){
    var selisih 
    var status = true

    if (arr[0]<arr[1]){
        selisih = arr[1]-arr[0] 
    }else{
        selisih = arr[0]-arr[1] 
    }    

    for (var i=0; i<arr.length; i++){
        var check
        if (arr[i]<arr[i+1] || i != arr.length-1){
            check = arr[i+1]-arr[i]
        }else if (arr[i]>arr[i+1] || i != arr.length-1){
            check = arr[i]-arr[i+1]
        }
                
        if(selisih!=check){
            status = false
        }
    }
    return status
    
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false