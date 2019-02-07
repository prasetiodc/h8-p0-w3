function hitungJumlahKata(kalimat){
    var counter = 0

    for(var i = 0; i<kalimat.length; i++){
        if(kalimat[i]===' ' || i == kalimat.length-1){
            // console.log(kalimat[i-1])
            counter++
        }
    }
    return counter
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5