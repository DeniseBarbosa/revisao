let diaSemana =  5;

switch (diaSemana) {
    case 0:
    diaSemana = "segunda-feira";
    break;
    case 1:
        diaSemana = "terça-feira";
        break;
    case 2:
         diaSemana = "quarta-feira";
            break;
    case 3:
         diaSemana = "quinta-feira";
            break;
    case 4:
        diaSemana = "sexta-feira";
            break;
    case 5:
     diaSemana = "sabado";
            break;
    default:
        diaSemana = "Numero invalido";
}

console.log(diaSemana);