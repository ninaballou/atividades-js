var numero = Math.random() * 100;


//se numero for menor que 10, imprime e incrementa
while(numero < 90){
    console.log(numero);
    numero++
}
// imprime 5,6,7,8 e 9 - enquanto for verdadeiro ele tenta executar, se não houver incremento 5 sempre será menor que 10, logo imprimirá infinito.

console.log(numero);
console.log("Acabou");