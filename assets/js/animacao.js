const progressBar = document.getElementById('progressBar')
let tempoTemporizador
let animating = false

function animacao() {
    if (animating) {
        progressBar.style.left = '0%'
        void progressBar.offsetWidth
        progressBar.style.animation = 'none'
        void progressBar.offsetWidth
        progressBar.style.animation = null
    }

    let valorCapturado = capturarInputs()
    progressBar.style.setProperty('--animation-duration', valorCapturado + 'ms')

    animating = true
    progressBar.style.animation = 'none'
    void progressBar.offsetWidth
    progressBar.style.animation = null
}

progressBar.addEventListener('animationiteration', function() {
    const senhaGerada = gerarSenha(4)
    document.getElementById('senha').value = senhaGerada
    animating = false
})