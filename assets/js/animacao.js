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
    progressBar.classList.toggle('progress-bar')
    progressBar.style.setProperty('--animation-duration', valorCapturado + "ms")
}

progressBar.addEventListener('animationiteration', function() {
        const senhaGerada = gerarSenha(4)
        document.getElementById('senha').value = senhaGerada
})
