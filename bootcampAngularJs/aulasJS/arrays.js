const alunos = ['Adson', 'Aniel', 'Theba'];

//Para introduzir um aluno na lista de arrays

//Você pode usar o método .push para adicionar ao final da lista
alunos.push('Renan');

//Você pode usar o método para adicionar à lista com a posição já definida
alunos[4] = 'Vinicius';

console.log(alunos);

//Retira o último da lista e nos imprime separado
console.log(alunos.pop());

//Retira o primeiro da lista e nos imprime separado
console.log(alunos.shift());

console.log(alunos);
