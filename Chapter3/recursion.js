let num;

function isEven (num){
    if (num === 0)
        return true;
    else
        if (num === 1)
            return false;
        else
            return isEven(num-2);
}

if (isEven(17))
    console.log("El número es par");
else
    console.log("El número es impar");