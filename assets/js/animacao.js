const progressBar = document.getElementById('progressBar')

function animacao() {
    let valorCapturado = capturarInputs()
    progressBar.classList.toggle('progress-bar-animation')
    progressBar.style.setProperty('--animation-duration', valorCapturado + "ms")
    const mensagemErro = document.getElementById('mensagemErro')
    mensagemErro.textContent = "O número deve ser maior ou igual a zero.";
}

progressBar.addEventListener('animationiteration', function() {
        const senhaGerada = gerarSenha(4)
        document.getElementById('senha').value = senhaGerada
});
