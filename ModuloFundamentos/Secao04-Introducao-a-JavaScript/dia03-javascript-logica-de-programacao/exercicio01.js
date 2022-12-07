/* Exercício 1: Escreva um código que reproduza o resultado de uma fatoração*/

    let number = 1;
   for (let counter=10; counter>0;counter-=1) {
    number*=counter;
   }
   console.log(number);




/* Um algoritmo com for que reproduza o inverso da palavra definida*/   

let word='samba';
let reverse = '';

   for( let index=0; index < word.length; index+=1){
        reverse += word[word.length-1-index];
    }
    console.log(reverse);



/*Imprimir a maior palavra e a menor*/

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = '';
let menor = '';

for (index=0; index<array.length; index+=1){

    let tamanho=array[index].length;
    console.log(tamanho);
    /* ate aqui consegui dizer o tamanho das palavras na array. falta comparar e mostrar na tela*/

}

