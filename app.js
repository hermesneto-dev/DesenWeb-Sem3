// Semana 03 — Fundamentos, funções e controle de fluxo.
console.log("=== BLOCO 1: FUNDAMENTOS E VARIÁVEIS ===");

// let permite reatribuição.
let pontos = 20;
pontos += 10;
console.log("Pontos:", pontos);

// A tentativa é capturada para demonstrar o TypeError sem interromper o restante.
const MAX_PONTOS = 100;
try {
  // eslint-disable-next-line no-const-assign
  MAX_PONTOS = 120;
} catch (erro) {
  console.log("TypeError esperado: const não pode ser reatribuída.", erro.message);
}

// Exemplos dos cinco tipos primitivos solicitados.
const texto = "JavaScript";
const numero = 42;
const ativo = true;
let indefinido;
const nulo = null;
console.log(typeof texto, typeof numero, typeof ativo, typeof indefinido, typeof nulo);

const nome = "Alex";
const idade = 20;
console.log(`Template literal: ${nome} tem ${idade} anos.`);
console.log("Concatenação: " + nome + " tem " + idade + " anos.");

console.log("\n=== BLOCO 2: FUNÇÕES ===");

// Funções declaradas sofrem hoisting e podem ser chamadas antes da declaração.
console.log("Hoisting — função declarada:", ehMaiorDeIdade(18));
function ehMaiorDeIdade(idadePessoa) {
  return idadePessoa >= 18;
}

// Expressões de função não podem ser usadas antes da inicialização da const.
try {
  ehMaiorDeIdadeExpressao(18);
} catch (erro) {
  console.log("ReferenceError esperado na expressão:", erro.message);
}
const ehMaiorDeIdadeExpressao = function (idadePessoa) {
  return idadePessoa >= 18;
};
console.log("Expressão:", ehMaiorDeIdadeExpressao(18));

// A mesma operação escrita como declaração, expressão e arrow function.
function dobroDeclarada(valor) {
  return valor * 2;
}
const dobroExpressao = function (valor) {
  return valor * 2;
};
const dobroArrow = (valor) => valor * 2;
console.log(dobroDeclarada(5), dobroExpressao(5), dobroArrow(5));

// Parâmetro padrão usado quando nenhum argumento é enviado.
const dobroComPadrao = (valor = 1) => valor * 2;
console.log("Dobro sem argumento:", dobroComPadrao());

console.log("\n=== BLOCO 3: CONTROLE DE FLUXO ===");

function classificarNota(nota) {
  if (nota >= 6) return "Aprovado";
  return "Reprovado";
}
console.log("Nota 7:", classificarNota(7));

const corSemaforo = "amarelo";
switch (corSemaforo) {
  case "vermelho":
    console.log("Pare");
    break;
  case "amarelo":
    console.log("Atenção");
    break;
  case "verde":
    console.log("Siga");
    break;
  default:
    console.log("Cor inválida");
}

console.log("Tabuada do 5:");
for (let multiplicador = 1; multiplicador <= 10; multiplicador += 1) {
  console.log(`5 x ${multiplicador} = ${5 * multiplicador}`);
}

console.log("Contagem regressiva:");
let contagem = 5;
while (contagem >= 1) {
  console.log(contagem);
  contagem -= 1;
}

console.log("Pares e ímpares com for:");
for (let valor = 1; valor <= 20; valor += 1) {
  console.log(valor, valor % 2 === 0 ? "par" : "ímpar");
}

console.log("Pares e ímpares com while:");
let valorWhile = 1;
while (valorWhile <= 20) {
  console.log(valorWhile, valorWhile % 2 === 0 ? "par" : "ímpar");
  valorWhile += 1;
}

function diaDaSemana(numeroDia) {
  switch (numeroDia) {
    case 1: return "Domingo";
    case 2: return "Segunda-feira";
    case 3: return "Terça-feira";
    case 4: return "Quarta-feira";
    case 5: return "Quinta-feira";
    case 6: return "Sexta-feira";
    case 7: return "Sábado";
    default: return "Número inválido";
  }
}
console.log("Dia 3:", diaDaSemana(3));
