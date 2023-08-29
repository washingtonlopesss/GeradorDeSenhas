const progressBar = document.getElementById('progressBar')

function animacao() {
    let valorCapturado = capturarInputs()
    progressBar.classList.toggle('progress-bar')
    progressBar.style.setProperty('--animation-duration', valorCapturado + "ms")
}

progressBar.addEventListener('animationiteration', function() {
        const senhaGerada = gerarSenha(4)
        document.getElementById('senha').value = senhaGerada
})