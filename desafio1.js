// Escreva um código em Javascript que resolva o problema: temos que obter as 3 notas de um aluno
// calcular a média e eibir se o aluno foi aprovado, reprovado ou se ficou para exame. Não é necessário
// ler as notas, você pode defini-las com variáveis.




const nota1 = 6, nota2 = 7, nota3 = 1;
const media = (nota1 + nota2 + nota3)/3; 

if (media >= 7)  {
     console.log(`Aprovado com média ${media.toFixed(2)}`);
} else if (media>=5) { 
   console.log(`Exame com média ${media.toFixed(2)}`);
} else {
  console.log(`Reprovado com media ${media.toFixed(2)}`);
}
