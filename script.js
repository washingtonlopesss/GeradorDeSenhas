const caracteresPermitidos = 'abcdefghijklmnopqrstuvwxyz0123456789';

function gerarSenha(comprimento) {
    let senha = '';
    for (let i = 0; i < comprimento; i++) {
        const indice = Math.floor(Math.random() * caracteresPermitidos.length);
        senha += caracteresPermitidos[indice];
    }
    return senha;
}

document.getElementById('gerarSenha').addEventListener('click', function() {
    const senhaGerada = gerarSenha(4);
    document.getElementById('senha').textContent = senhaGerada;
    document.getElementById('copiarSenha').disabled = false;
});

document.getElementById('copiarSenha').addEventListener('click', function() {
    const senha = document.getElementById('senha').textContent;
    const tempInput = document.createElement('textarea');
    tempInput.value = senha;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); 
    document.execCommand('copy');
    document.body.removeChild(tempInput);
});