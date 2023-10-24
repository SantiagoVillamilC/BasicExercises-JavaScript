//Crea un bucle que sume todos los
//números del 1 al 100. Deberías obtener como resultado 5050.

var i = 0;

function sumar(){
    let suma = 0;
    while (i <= 100){
        suma += i;
        console.log(i);
        i++
    }
    console.log("Suma total: " + suma);
}

sumar();