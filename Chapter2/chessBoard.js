let size = 4;
let str = '';
for (let i = 1; i<= size; i++){
    if (i%2 != 0) {
        for (let j = 1; j <= size; j++){
            if (j%2 != 0)
                str+= ' ';
            else
                str+= '#';
        }
        str+= '\n'; 
    }
    else{
        for (let k = 1; k <= size; k++){
            if (k%2 != 0)
                str+= '#';
            else
                str+= ' ';
        }
        str+= '\n';
    }
}
console.log(str);