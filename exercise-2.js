function balikKata(input){
    var display = ''
    for (var i=input.length-1; i>=0; i--){
        display += input[i]
    }
    return display
}
balikKata('Hello World!')