let silla

function montoAlquiler (tipo, dia, silla) {
    let precioTotal;
    let totalMonto;
    switch (tipo){
        case ("compacto"):
            precioTotal = 14000 * dia;
        break;
        case ("mediano"):
            precioTotal = 17000 * dia;
        break;
        case ("camioneta"):
            precioTotal = 28000 * dia
        break;
        default:
            console.log("no se ingreso vehiculo valido");
    }
if (silla){
    totalMonto = precioTotal + (1200*dia);
}else {
    totalMonto = precioTotal;
}
return "Estimado cliente: en base al tipo de vehículo" +" " + tipo +" "+ "alquilado, considerando los" +" " + dia +" "+ "días utilizados, el monto total a pagar es de $"+ totalMonto
}
console.log(montoAlquiler("camioneta",3,true));
