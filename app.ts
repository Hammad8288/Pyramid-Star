import promptSync from "prompt-sync";

let prompt = promptSync();

function pyramidStar (rows: number):void{
    for (let i= 1; i<= rows; i++){
        const spaces = ' '.repeat(rows-i)
        const stars = '*'.repeat(2*i-1)
    
        console.log(spaces + stars);
    }
}

const rowsInput: string = prompt('Enter the number of rows for the star pyramid: ');
const rows :number = parseInt(rowsInput);

if (isNaN(rows) || rows < 0) {
    console.log('Please enter a valid number');
}else {
    pyramidStar(rows);
}