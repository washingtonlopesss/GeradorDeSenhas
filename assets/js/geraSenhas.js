const caracteresPermitidos = 'abcdefghijklmnopqrstuvwxyz0123456789'

function gerarSenha(comprimento) {
    let senha = ''
    for (let i = 0; i < comprimento; i++) {
        const indice = Math.floor(Math.random() * caracteresPermitidos.length)
        senha += caracteresPermitidos[indice]
    }
    return senha
}

document.getElementById('gerarSenha').addEventListener('click', function() {
    const senhaGerada = gerarSenha(4)
    document.getElementById('senha').value = senhaGerada
})