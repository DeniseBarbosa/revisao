let idade = 10;
let estaComPais = false;
let bilhete = true;

if (idade >=18 || estaComPais) {
    if (bilhete) {
        console.log(`Pode viajar`);
    }else if( idade < 18 && !estaComPais && bilhete === true){
        console.log()
    }
}