let str = '';

function countBs (str){
    let cant = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === "B")
            cant++;
    }
    return cant;
}

console.log(countBs("BABY"));


// Segunda función

let car = '';

function countChar (str, car){
    let cant = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === car)
            cant++;
    }
    return cant;
}

console.log(countChar("BABY", "A"));

