function validacaoDeCampos() {
    const inputSeconds = parseInt(document.getElementById('inputSeconds').value);
    const inputMinutes = parseInt(document.getElementById('inputMinutes').value);
    const mensagemErro = document.getElementById('mensagemErro');

    if ((isNaN(inputMinutes) || isNaN(inputSeconds)) && (inputMinutes <= 0 && inputSeconds <= 0)) {
        mensagemErro.style.display = 'block';
        if (inputSeconds <= 0 && inputMinutes <= 0) {
            alert("O valor deve ser maior que zero!");
        }

    } else {
        mensagemErro.style.display = 'none';
    }
}

document.getElementById('check').addEventListener('click', validacaoDeCampos);
document.getElementById('inputMinutes').addEventListener('blur', validacaoDeCampos);
document.getElementById('inputSeconds').addEventListener('blur', validacaoDeCampos);
