// Crie um programa que calcule o Índice de Massa Corporal (IMC) de uma pessoa.

//Orientações:

//Utilize o método prompt() do objeto window para realizar a leitura dos dados de entrada.
//Utilize a fórmula IMC = peso / altura² para calcular o IMC.
//Utilize a estrutura if-else para classificar o IMC de acordo com a tabela da OMS:


//IMC	Indicação
//Abaixo de 18,5	Abaixo do peso
//18,5 - 24,9	    Peso normal
//25,0 - 29,9	    Sobrepeso
//30,0 - 34,9	    Obesidade grau I
//35,0 - 39,9	    Obesidade grau II
//Acima de 40,0	    Obesidade grau III



let altura, peso ;

peso = window.prompt('Digite o seu peso');
altura = window.prompt('Digite a sua altura');


 const imc = peso / altura ** 2;

  
if(imc < 18.5) {
    window.alert(`IMC: ${imc.toFixed(1)}  -- Abaixo do Peso`);

} else if(imc >= 18 && imc < 25) {
    window.alert(`IMC: ${imc.toFixed(1) }  -- Peso Normal`);

}  else if(imc >= 25 && imc < 30) {
    window.alert(`IMC: ${imc.toFixed(1)}  -- Sobrepeso`);

}  else if(imc >= 30 && imc < 35) {
    window.alert(`IMC: ${imc.toFixed(1)}  -- Obesidade grau I`);

} else if(imc >= 35 && imc < 40)  {
    window.alert(`IMC: ${imc.tofixed(1)}  -- Obesidade grau II`)

} else  {
    window.alert(`IMC: ${imc.tofixed(1)}   -- Obesidade grau III`)
}









