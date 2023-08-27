function copiar(campo) {
    const tempInput = document.createElement('textarea')
    tempInput.value = campo
    document.body.appendChild(tempInput)
    tempInput.select()
    tempInput.setSelectionRange(0, 99999)
    document.execCommand('copy')
    document.body.removeChild(tempInput)
}

document.getElementById('copiarSenha').addEventListener('click', function() {
    const senha = document.getElementById('senha').value
    copiar(senha)
    const senhaCopiadaElement = document.getElementById('senhaCopiada');

    senhaCopiadaElement.style.display = 'block';
    setTimeout(function() {
        senhaCopiadaElement.style.display = 'none';
    }, 3000);
})

document.getElementById('copiarTxtConvertido').addEventListener('click', function() {
    const convertido = document.getElementById('convertido').value
    copiar(convertido)

    const txtCopiadoElement = document.getElementById('txtCopiado')
    txtCopiadoElement.style.display = 'block';
    setTimeout(function() {
        txtCopiadoElement.style.display = 'none';
    }, 3000);
})