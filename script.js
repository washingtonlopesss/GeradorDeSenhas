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

function converterParaMaiusculas() {
    const inputElement = document.getElementById('inputString')
    const resultadoElement = document.getElementById('resultado')
    const inputString = inputElement.value
    const stringConvertida = inputString.toUpperCase()
    resultadoElement.value = stringConvertida
}

function copiarResultado() {
    const resultado = document.getElementById('resultado').value;
    const tempInput = document.createElement('textarea');
    tempInput.value = resultado
    document.body.appendChild(tempInput)
    tempInput.select()
    tempInput.setSelectionRange(0, 99999)
    document.execCommand('copy')
    document.body.removeChild(tempInput)
}

document.getElementById('check').addEventListener('click', function() {
    if (this.checked) {
        senhaInterval = setInterval(function() {
            const senhaGerada = gerarSenha(4);
            document.getElementById('senha').value = senhaGerada;
    }, 5000)
    } else {
        clearInterval(senhaInterval);
    }
})

document.getElementById('gerarSenha').addEventListener('click', function() {
    const senhaGerada = gerarSenha(4);
    document.getElementById('senha').value = senhaGerada;
    document.getElementById('copiarSenha').disabled = false;
});

document.getElementById('check').addEventListener('click', function() {
    let check = document.getElementById('check').checked
    if (check) {
        document.getElementById('boxNumbers').style.display = 'flex'
        document.querySelector('.progress-bar').style.display = 'block'
    } else {
        document.getElementById('boxNumbers').style.display = 'none'
        document.querySelector('.progress-bar').style.display = 'none'
    }
})
document.getElementById('copiarSenha').addEventListener('click', copiarSenha);
document.getElementById('copiarResultado').addEventListener('click', copiarResultado);
document.getElementById('inputString').addEventListener('input', converterParaMaiusculas);


document.getElementById('inputNumber').addEventListener('input', function iniciarAnimacao() {
    const progressInner = document.querySelector('.progress-inner');
    const minutos = parseInt(document.querySelector('.minutos').value) || 0;
    const segundos = parseInt(document.querySelector('.segundos').value) || 0;
    const tempoTotal = (minutos * 60 + segundos) * 1000;

    progressInner.style.transition = `width ${tempoTotal}s linear`;
    progressInner.style.width = '100%'

    setTimeout(() => {
        progressInner.style.transition = 'none';
        progressInner.style.width = '0'
    }, tempoTotal)
})




document.getElementById('check').addEventListener('click', function() {
    let check = document.getElementById('check').checked;
    if (check) {
        document.getElementById('boxNumbers').style.display = 'flex';
        document.querySelector('.progress-bar').style.display = 'block';
    } else {
        document.getElementById('boxNumbers').style.display = 'none';
        document.querySelector('.progress-bar').style.display = 'none';
    }
})