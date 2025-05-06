function eliminarVocales(string) {
  return string.replace(/[aeiouAEIOU]/g, "");
}

console.log(eliminarVocales("HOLA caracola"));
