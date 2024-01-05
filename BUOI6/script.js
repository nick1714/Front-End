function phuongtrinhbac2(a,b,c){
    var delta = b*b - 4*a*c

    if(delta < 0){
        console.log("Phương trình vô nghiệm");
    } else if (delta === 0){
        var x = -b/(2*a)
        console.log("Phương trình có nghiệm kép x = ", x);
    } else {
        var x1 = (-b * Math.sqrt(delta))/ (2*a);
        var x2 = (-b * Math.sqrt(delta)) / (2*a);
        console.log("x1 = ", x1);
        console.log("x2 = ", x2);
    }
}

for(let i = 1; i <= 5; i++){
    let row ='';
    for(let j = 1; j <= i; j++){
        row += '*';
    }
    console.log(row);
}

for (let i = 1; i <= 6; i++) {
    let spaces = ' '.repeat(6 - i);
    let stars = '*'.repeat(i);
    console.log(spaces + stars);
}    