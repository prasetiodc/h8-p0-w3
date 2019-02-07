function angkaPalindrome(angka){    
    var status = false
    angka += 1
    
        while(!status){
            var balikAngka = ''
            var angkaString = String(angka)
            
            for(var i = angkaString.length-1; i>=0;i--){
                balikAngka += angkaString[i]
            }

            if(balikAngka===angkaString){
                    status = true
                    return angka
                }

            angka=Number(angkaString)

            angka++
        }
    }

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
