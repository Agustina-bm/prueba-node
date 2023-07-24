function convertir (string) {
  return string.toUpperCase
}
console.log(convertir("perro"));

function dato (tipo){
  return typeof(tipo);
}
console.log(dato("perro"));

function edadDePerro (edad){
  return edad * 7
}
console.log("la edad del perro es "+ edadDePerro(2)+ "en años humanos.");

function horaTrabajo (salario,dia,hora){
  return (salario/dia) /hora;

}
console.log("el valor de una hora trabajada es $"+ horaTrabajo(10000,10,8));