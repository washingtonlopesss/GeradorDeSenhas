let tempoTemporizador

function atualizarTemporizador() {
    let check = document.getElementById('check').checked
    const boxNumbers = document.getElementById('boxNumbers')
    const boxProgressBar = document.querySelector('.box-progress-bar')

    if (check) {
        boxNumbers.style.display = 'flex'
        boxProgressBar.style.display = 'block'
        clearInterval(tempoTemporizador)
        tempoTemporizador = setInterval(animacao(), capturarInputs())
    } else {
        boxNumbers.style.display = 'none'
        boxProgressBar.style.display = 'none'
        clearInterval(tempoTemporizador)
    }
}

document.getElementById('check').addEventListener('click', atualizarTemporizador)
document.getElementById('inputMinutes').addEventListener('blur', atualizarTemporizador)
document.getElementById('inputSeconds').addEventListener('blur', atualizarTemporizador)