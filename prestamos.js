


function calcular_prestamo( monto , cuotas ){

    monto = parseFloat(monto);
    cuotas = parseInt(cuotas);

    let prestamo = 0;

    if(cuotas == 1 && monto > 0){
        return monto
    }
    else if( cuotas == 3 && monto > 0){
        prestamo = monto + (monto * 0.30);
        return prestamo
    }
    else if( cuotas == 6 && monto > 0){
        prestamo = monto + (monto *0.60);
        return prestamo
    }
    else if( cuotas == 12 && monto > 0){
        prestamo = monto + (monto * 1);
        return prestamo
    }

}

// Prestamos //

console.log("Bienvenido/a a Prestamos El PEPE");

let monto = 0;

while( monto != "FIN") {

    monto = prompt("Ingrese el monto deseado o FIN");
    if(monto != "FIN"){
        let cuotas = prompt("Ingrese la cantidad de cuotas: 1, 3, 6 y 12");
        let resultado_del_prestamo = calcular_prestamo( monto , cuotas);
        console.log("Pediste:", monto);
        console.log("Cuotas:", cuotas);
        console.log("Devolves:", resultado_del_prestamo);
    }
    else{
        console.log("Gracias")
    }
    
}