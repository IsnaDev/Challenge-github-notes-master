/*Atividade 1: Alunos Aprovados
Crie uma função que recebe o array alunos e um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.*/


const alunos = [
	{
		nome: 'Joana',
		nota: 5,
	},
	{
		nome: 'Sonia',
		nota: 9,
	},
	{
		nome: 'José',
		nota: 6,
	},
];

function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 6)); //retorna Sonia, José


/*Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this.*/

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
	nome: 'Ana',
	idade: 30,
};

const pessoa2 = {
	nome: 'Maria',
	idade: 57,
};

const pessoa3 = {
	nome: 'João',
	idade: 20,
};

console.log(calculaIdade.call(pessoa3, 10));    //retorna Daqui a 10 anos, João terá 30 anos
console.log(calculaIdade.apply(pessoa2, [5])); //retorna Daqui a 5 anos, Maria terá 62 anos