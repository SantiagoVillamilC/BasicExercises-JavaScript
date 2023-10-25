//Usa un bucle `for` para
//imprimir los números del 1 al 20, pero por cada número que sea
//múltiplo de 3, en lugar del número, imprime la palabra "Fizz". Por cada
//número que sea múltiplo de 5, imprime "Buzz". Y para los números que
//son múltiplos de ambos, 3 y 5, imprime "FizzBuzz".

for (let i = 1; i <= 20; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
        continue;
    }
    else if(i % 3 === 0){
        console.log("Fizz");
        continue;
    }
    else if(i % 5 === 0){
        console.log("Buzz");
        continue;
    }
    else{
        console.log(i);
    }
}