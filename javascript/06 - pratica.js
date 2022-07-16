function compararNumeros(num1, num2){
    if(!num1 || !num2) return 'Defina dois números diferente de 0 (zero)' //verificação

    const primeiraFrase = criarPrimeiraFrase (num1, num2);
    const segundaFrase = criarSegundaFrase (num1, num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criarPrimeiraFrase(num1, num2){
    let saoIguais = '';
    
    if (num1 !== num2){
        saoIguais = 'não';
    }

    return`Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criarSegundaFrase(num1, num2){
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    
    const comparar10 = soma > 10;
    const comparar20 = soma > 20;

    if(comparar10){
        resultado10 = 'maior';
    }

    if(comparar20){
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que é 10 e ${resultado20} que é 20.`
}

console.log(compararNumeros(1, 2))