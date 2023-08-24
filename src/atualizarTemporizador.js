let tempoTemporizador

function atualizarTemporizador() {
    let check = document.getElementById('check').checked

    const boxNumbers = document.getElementById('boxNumbers')
    const progressBar = document.querySelector('.progress-bar')

    if (check) {
        boxNumbers.style.display = 'flex'
        progressBar.style.display = 'block'

        clearInterval(tempoTemporizador)
        tempoTemporizador = setInterval(function() {
            const senhaGerada = gerarSenha(4)
            document.getElementById('senha').value = senhaGerada
        }, capturarInputs())
    } else {
        boxNumbers.style.display = 'none'
        progressBar.style.display = 'none'

        clearInterval(tempoTemporizador)
    }
}

document.getElementById('check').addEventListener('click', atualizarTemporizador)
document.getElementById('inputMinutes').addEventListener('blur', atualizarTemporizador)
document.getElementById('inputSeconds').addEventListener('blur', atualizarTemporizador)