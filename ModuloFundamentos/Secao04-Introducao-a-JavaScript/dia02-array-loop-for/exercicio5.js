let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let result= 0;

for (let index = 0; index < numbers.length; index +=1 ) {
 result += numbers[index];
}

let mean = result / numbers.length;
console.log(mean);

if (mean <= 20) {
    console.log ('valor maior que 20');
}  else {
    console.log ('valor menor ou igual a 20');
}


let higherNumber = numbers[0];
for (let index = 1; index < numbers.length; index +=1){
 if (numbers[index] > higherNumber) {
    higherNumber= numbers[index];
 }
}  
console.log(higherNumber);


let totalEven=0;
 for (let index=0; index<numbers.length; index+=1){
    if (numbers[index] % 2 !== 0) {
        totalEven += 1;
    }
 }
     if (totalEven === 0) {
        console.log('Nenhum valor ímpar encontrado');
    } else {

    console.log(totalEven);
}


