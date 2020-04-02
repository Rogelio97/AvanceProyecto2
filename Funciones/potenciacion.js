function potencia(numero, elevacion) {
    var potenciaResultado = document.getElementById("potenciaResultado ")
    var textResultado = document.getElementById("textarea1")
    var numero = parseInt(document.getElementById("num").value)
    var elevacion = parseInt(document.getElementById("elev").value)

    let peri = Math.pow(numero,elevacion)

    return textResultado.value = peri


}