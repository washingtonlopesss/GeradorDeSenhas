document.getElementById('inputString').addEventListener('input',function converterString() {
    const inputString = document.getElementById('inputString').value
    const convertidoElement = document.getElementById('convertido')
    const stringConvertida = inputString.toUpperCase()
    convertidoElement.value = stringConvertida
})