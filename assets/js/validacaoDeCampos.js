function validacaoDeCampos() {
    const mensagemErro = document.getElementById('mensagemErro')
    if (isNaN(inputValue)) {
        errorMessage.textContent = "ERRO! Valor invalido!";
    } else if (inputValue < 0) {
        errorMessage.textContent = "O número deve ser maior ou igual a zero.";
    } else {
        errorMessage.textContent = "";
    }
}