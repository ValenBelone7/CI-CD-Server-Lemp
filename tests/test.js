// ejemplo real: una utilidad que podrías usar en el front
function formateaPrecio(n) {
  return Number(n).toFixed(2);
}

console.assert(formateaPrecio(10) === "10.00", "formateaPrecio(10) debe ser '10.00'");
console.assert(formateaPrecio(3.5) === "3.50", "formateaPrecio(3.5) debe ser '3.50'");

console.log("✅ Tests OK");
