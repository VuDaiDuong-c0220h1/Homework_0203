//Bài 1:
function checkProduct() {
    let str = document.getElementById("value01").value;
    let array = str.split(" ");
    let array2 = [];
    for (let i = 0; i < array.length-1; i++) {
        array2.push(array[i]*array[i+1]);
    }
    array2.sort(function (a, b) {
        return a - b;
    });
    document.getElementById("result01").innerHTML = array2[array2.length-1];
}

//Bài 2:
function checkYear() {
    let year = parseInt(document.getElementById("value02").value);
    let i = year/100 + 1;
    let century = parseInt(i);
    document.getElementById("result02").innerHTML = century;
}