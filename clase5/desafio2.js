function hamburguesa (tipo, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla){
    let precioTotal;
    if (tipo == "carne a la parilla"){
        precioTotal=1800
    }else if (tipo=="pollo"){
        precioTotal=1500
    }else if (tipo=="vegetariana"){
        precioTotal=1200
    }
    if (jamon==true){
        precioTotal= precioTotal + 30;
    }
    if (queso==true){
        precioTotal= precioTotal + 25;
    }
    if (salsa==true){
        precioTotal= precioTotal + 5;
    }
    if (mayonesa==true){
        precioTotal= precioTotal + 5;
    }
    if (mostaza==true){
        precioTotal= precioTotal + 5;
    }
    if (tomate==true){
        precioTotal= precioTotal + 15;
    }
    if (lechuga==true){
        precioTotal= precioTotal + 10;
    }
    if (cebolla==true){
        precioTotal= precioTotal + 10;
    }
return precioTotal;
}

function totalApagar (nombre, apellido, tipo, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla){
    return "Estimado"+" " + nombre +" "+ apellido + ", el monto a pagar es de: $"+ hamburguesa(tipo, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla);
}
console.log(totalApagar("Agustina","Mamaní","pollo",true,true,false,true,false,true,true,true));