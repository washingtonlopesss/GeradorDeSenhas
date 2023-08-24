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
})

document.getElementById('copiarTxtConvertido').addEventListener('click', function() {
    const convertido = document.getElementById('convertido').value
    copiar(convertido)
})