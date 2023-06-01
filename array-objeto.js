const nomes = ["Jão","maria"];
const pessoa = {
    nome: "Denise",
    idade: 25
};

const pessoas = [
    {nome:"Pedro", idade:20},
    {nome:"Maria", idade: 30},
    {nome:"Leandro", idade:12}
];

for(let i = 0; i<pessoas.length; i ++){
    console.log(`O ${pessoas[i].nome} possui ${pessoas[i].idade} anos`);
}

