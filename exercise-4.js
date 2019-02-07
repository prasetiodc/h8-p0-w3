function dataHandling2(input){
    input.splice(1,4,"Roman Alamsyah Elsharawy","Provinsi Bandar Lampung","21/05/1989","Pria","SMA Internasional Metro")
    console.log(input)

    var tanggal1 = input[3].split('/')
    switch(tanggal1[1]){
        case '01':
            console.log('Januari')
            break
        case '02':
            console.log('Februari')
            break
        case '03':
            console.log('Maret')
            break
        case '04':
            console.log('April')
            break
        case '05':
            console.log('Mei')
            break
        case '06':
            console.log('Juni')
            break
        case '07':
            console.log('Juli')
            break
        case '08':
            console.log('Agustus')
            break
        case '09':
            console.log('September')
            break
        case '10':
            console.log('Oktober')
            break
        case '11':
            console.log('November')
            break
        case '12':
            console.log('Desember')
            break
    }

    var tanggal2 = input[3].split("/")
    var tanggalSort = tanggal2.sort(function(value1, value2){ return value2 - value1 })
    console.log(tanggalSort)

    var tanggal3 = input[3].split("/")
    var tanggalJoin = tanggal3.join(" - ")
    console.log(tanggalJoin)

    console.log(input[1].slice(0,15))
    
}

var input = ["0001","Roman Alamsyah","Bandar Lampung","21/05/1989","Membaca"]

dataHandling2(input)

