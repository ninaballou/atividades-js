var nota1 = 8.0;
var nota2 = 7.0;

var media = (nota1 + nota2) / 2 ;

if(media >= 8){

conceito = "Otimo";

}else if(media >= 6.5) {

conceito = "Bom";

} else {

conceito = "Regular";

}

console.log(media);
console.log(conceito);

switch(conceito){

    case "Otimo":
        console.log("Parabéns");
        break;

    case "Bom":
        console.log("Você está quase perfeito!");
        break;

    case "Regular":
        console.log("Estude mais um pouco");
        break;

    default:
        console.log("Houve algum erro") ;

}