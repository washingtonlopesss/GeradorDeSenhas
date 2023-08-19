const caracteresPermitidos = 'abcdefghijklmnopqrstuvwxyz0123456789';
let senhaInterval;

function gerarSenha(comprimento) {
    let senha = '';
    for (let i = 0; i < comprimento; i++) {
        const indice = Math.floor(Math.random() * caracteresPermitidos.length);
        senha += caracteresPermitidos[indice];
    }
    return senha;
}

function copiarSenha() {
    const senha = document.getElementById('senha').value;
    const tempInput = document.createElement('textarea');
    tempInput.value = senha;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}

function copiarResultado() {
    const resultado = document.getElementById('resultado').value; // Correção aqui
    const tempInput = document.createElement('textarea');
    tempInput.value = resultado; // Correção aqui
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}

function converterParaMaiusculas() {
    const inputElement = document.getElementById('inputString');
    const resultadoElement = document.getElementById('resultado');
    const inputString = inputElement.value;
    const stringConvertida = inputString.toUpperCase();
    resultadoElement.value = stringConvertida;
}

document.getElementById('check').addEventListener('click', function() {
    if (this.checked) {
        senhaInterval = setInterval(function() {
            const senhaGerada = gerarSenha(4);
            document.getElementById('senha').value = senhaGerada;
        }, 30000);
    } else {
        clearInterval(senhaInterval);
    }
});

document.getElementById('gerarSenha').addEventListener('click', function() {
    const senhaGerada = gerarSenha(4);
    document.getElementById('senha').value = senhaGerada;
    document.getElementById('copiarSenha').disabled = false;
});

document.getElementById('copiarSenha').addEventListener('click', copiarSenha);

document.getElementById('copiarResultado').addEventListener('click', copiarResultado);

document.getElementById('inputString').addEventListener('input', converterParaMaiusculas);

document.getElementById('toggleSenha').addEventListener('click', function() {
    const senhaInput = document.getElementById('senha');
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        this.textContent = 'Esconder Senha';
    } else {
        senhaInput.type = 'password';
        this.textContent = 'Mostrar Senha';
    }
});
