function capturarInputs() {
    let minutes = parseInt(document.getElementById('inputMinutes').value, 10)
    let seconds = parseInt(document.getElementById('inputSeconds').value, 10)
    return (minutes * 60 + seconds) * 1000 
}