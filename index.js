mostrarInformacoes('Joel', 31);
mostrarInformacoes('Adriel', 22);
mostrarInformacoes('Carine', 27);

function boasVindas(nome) {
    document.write(`<h1>Seja bem-vindo(a) ${nome}</h1>`);
}

boasVindas('Nayara')

function mostrarInformacoes(nome, idade) {
    document.write(`
        <ul>
            <li>Nome: ${nome}</li>
            <li>Idade: ${idade}</li>
            <li>Gênero: ---</li>

        </ul>
    `)
}
/**
 * 
 * @param {*} numero1 
 * @param {*} numero2 
 */
const somar = (numero1, numero2) => {
    return numero1 + numero2;
}

const somarAntigo = (numero1, numero2) => { //arrow function 
    document.write(`<h1>O resultado é: ${numero1 + numero2}</h1>`);
}

document.write(`<h1>O resultado é: ${somar(somar(2,2), somar(2,2))} </h1>`);
document.write(`<h1>O resultado é: ${somar(somar(2,2), somar(2,2))} </h1>`);
document.write(`<h1>O resultado é: ${somar(somar(2,2), somar(2,2))} </h1>`);

somar(2, 2);


function calcIdade(ano){
    document.write(`<h1>a idade do thiago é ${2024 - ano}</h1>`)
}

calcIdade(1993)