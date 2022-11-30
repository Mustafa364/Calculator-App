function display(val){

    document.getElementById('result').value += val

    return val

}

 
function solve(){

    var x = document.getElementById('result').value

    var y = eval(x);

    document.getElementById('result').value = y

    return y

}

function clearScreen(){

    document.getElementById('result').value = ''

}
