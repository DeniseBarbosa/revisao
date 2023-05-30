let idade = 18;
let paisPresentes = false;
let bilhete = false;
const podeViajar = idade >= 18 || paisPresentes && bilhete;
console.log(`Pode viajar:>>> ${podeViajar}`);