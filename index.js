let resultado = calcularSaldo(120, 10)


console.log(`O Herói tem de saldo de ${resultado} está no nível de ${classificarHeroi()} `) ;




function calcularSaldo(vitoria, derrota){

    let resultado = vitoria - derrota;
    return resultado;
    
    
}        
function classificarHeroi(){
   if (resultado <= 10){
     return ' Ferro'
   
    }  else if(resultado >= 11 && resultado <= 20 ) {
            return ' Bronze'

}      else if (resultado >= 21 && resultado <= 50 ){
            return ' Prata'

}      else if (resultado >= 51 && resultado <= 80 ){
            return ' Ouro'

}      else if (resultado >= 81 && resultado <= 90){
            return ' Diamante'

}      else if (resultado >= 91 && resultado <= 100){
            return ' Lendário'

}      else {
            return ' Imortal'  
}

        
}
calcularSaldo();
classificarHeroi();

