
function obtenerperimetro(a, b) {
    var perimetroResultado = document.getElementById("perimetroResultado")
    var textResultado = document.getElementById("textarea1")
    var a = parseInt(document.getElementById("altura").value)
    var b = parseInt(document.getElementById("base").value)

    let peri = (b + a) * 2

    return textResultado.value = peri


}
function obtenerArea(a, b) {

    var perimetroResultado2 = document.getElementById("perimetroResultado2")
    var textResultado2 = document.getElementById("textarea2")
    var a = parseInt(document.getElementById("altura").value)
    var b = parseInt(document.getElementById("base").value)

    let areRec = b * a

    return textResultado2.value = areRec
}
