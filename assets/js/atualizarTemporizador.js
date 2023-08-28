function atualizarTemporizador() {
    let check = document.getElementById('check').checked
    const boxNumbers = document.getElementById('boxNumbers')
    const progressBar = document.querySelector('.progress-bar')

    if (check) {
        boxNumbers.style.display = 'flex'
        progressBar.style.display = 'block'
        clearInterval(tempoTemporizador)
        animacao()
        tempoTemporizador = setInterval(function() {
            animacao()
        }, capturarInputs())
    } else {
        boxNumbers.style.display = 'none'
        progressBar.style.display = 'none'
        clearInterval(tempoTemporizador)
        animating = false
    }
}

document.getElementById('check').addEventListener('click', atualizarTemporizador)
document.getElementById('inputMinutes').addEventListener('blur', atualizarTemporizador)
document.getElementById('inputSeconds').addEventListener('blur', atualizarTemporizador)