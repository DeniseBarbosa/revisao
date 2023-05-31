// uma forma declarar funções 
function ola( ) {
    console.log("Olá Denise");
}
ola();

// expresão de função 

const ola2 = function  ( ) {
    console.log("Essa é outra função");
};
ola2();

// arroy functio 
const ola3 = () =>{
    console.log("Aqui é um arroy function");
};

// reaproveitando um bloco de codigos 
ola3();
ola3();
ola3();


// retornar valores na função 
function retornarValor(){
    return "Aqui está retornando um valor > segunda-feira";
};
let dia = retornarValor();
console.log(dia);

function diaSemana( ) {
    return new Date().getDay()
}
console.log(diaSemana);









