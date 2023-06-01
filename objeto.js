const nomes = {
    nome: "denise",
    idade: 25,
    email: "denise@gmail.com"
}
console.log(nomes);

// interar sobre as propriedade de um objeto 

for (let propriedade in nomes) {
     
    console.log(propriedade);
    console.log(nomes[propriedade]);
}
