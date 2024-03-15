// Escreva um código em Javascript que resolva o problema: temos que obter as 3 notas de um aluno
// calcular a média e eibir se o aluno foi aprovado, reprovado ou se ficou para exame. Não é necessário
// ler as notas, você pode defini-las com variáveis.




const nota1 = 8, nota2 = 9, nota3 = 10;
const media = (nota1 + nota2 + nota3)/3; 
if (media >= 7)  {
     console.log('Aprovado');
} else if (media>=5) { 
   console.log('Exame');
} else {
  console.log('Reprovado');
}
