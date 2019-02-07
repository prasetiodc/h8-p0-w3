function pasanganTerbesar(num){
    var stringNum = String(num)
    var max = 0

    for(var i=0; i < stringNum.length; i++){
        
        if (max < Number(stringNum[i]+stringNum[i+1])){
            max = Number(stringNum[i]+stringNum[i+1])
        }

    }
    return max
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99