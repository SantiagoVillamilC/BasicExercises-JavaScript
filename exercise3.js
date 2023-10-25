//Crear un bucle `for` dentro de otro bucle `for` para imprimir una tabla
//de multiplicar.

for (i = 1; i <= 10; i++){
    for(u = 0; u <= 10; u++){
        resul = i * u;
        console.log(i + " x " + u + " = " + resul)
    }
}