//declaramos variables globales para reurilizarlos en la funcion comparacionSuma
var random1 = 0;
var random2 = 0;
var respuestaSuma = 0;

var acumuladorCorrec = 0;
var acumuladorIncorrec = 0;
var acumuladorTotal = 0;
var uno = 1;
//primer funcion
const generarSuma = () => {
    document.getElementById("generarTotal").innerHTML = ++acumuladorTotal;

    //generamos numeros aleatorios, donde se guardan en los variables random
    random1 = Math.floor(Math.random() * 100);
    document.getElementById("suma1").innerHTML = random1;

    random2 = Math.floor(Math.random() * 10);
    document.getElementById("suma2").innerHTML = random2;

    //obtenemos los valores de los numeros aleatorios que se generan y realizamos la suma
    respuestaSuma = random1 + random2;
    //bloquear el boton generar numero, cuando sea igual a 100
    //100 es el minimo de ejercicios que puede generar
    if (acumuladorTotal === 30) {
        document.getElementById("bloquear").disabled = true;
        document.getElementById("msjBloq").innerHTML = " Has Alcanzado el limite de ejercicios, Recarga la Pagina";
    }
};

var vaciar = "";

const comparacionSuma = () => {

    document.getElementById("suma1").innerHTML = "Generar Número";
    document.getElementById("suma2").innerHTML = "Generar Número";

    //validacion de input, si el campo esta vacio, nose realiza la operacion, si se ingresa el valor
    //se realiza la  operacion de la suma
    if (document.getElementById("repRespuesta").value == "") {
        document.getElementById("msjVali").innerHTML = "Llena el campo";
    } else {
        //Eliminar msj de validacion
        document.getElementById("msjVali").innerHTML = "";
        //declaramos una variable para obtener el id  con el valor que el usuario esta ingresando
        var resultado = document.getElementById("repRespuesta").value;
        //obtenemos la respesta de la suma de los numeros aleatorios, lo comparamos con el numero que esta
        //ingresando el usuarios
        if (respuestaSuma == resultado) {

            //acumulador de respuestas correctas
            document.getElementById("acumuladorCorrec").innerHTML = "Correcto: " + ++acumuladorCorrec;
            //vaciamos el input
            document.getElementById("repRespuesta").value = vaciar;
            //si la respuesta es igual al valor que el usuario ingresa enviamos en mensaje verdadera

            return document.getElementById("correctoIncorectRespuesta").innerHTML = respuestaSuma + "=Respuesta correcta";

        } else {
            // si no es asi enviamos el false.
            //acumulador de respuestas incorrectas
            document.getElementById("acumuladorIncorrec").innerHTML = "Incorreto: " + ++acumuladorIncorrec;
            //vaciamos el input
            document.getElementById("repRespuesta").value = vaciar;
            return document.getElementById("correctoIncorectRespuesta").innerHTML = resultado + "=Respuesta Incorrecta, Genera de nuevo";

        }
    }
};

//calcular el porcentaje de las respuestas correctas e incorrectas
var i = 0;
var j = 0;
const porcentajeEjercicio = () => {

    //calcular porcentaje de respuestas incorrectas
    var porcentajeIncorrectas = (acumuladorIncorrec / 30) * 100;


    if (i == 0) {
        i = 1;
        var IndicadorIncorecto = document.getElementById("IndicadorIncorecto");
        var width = 0;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= porcentajeIncorrectas) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                IndicadorIncorecto.style.width = width + "%";
                IndicadorIncorecto.innerHTML = width + "%";
            }
        }
    }

    //calcular porcentaje de respuestas corectas
    var porcentajeCorrectas = (acumuladorCorrec / 30) * 100;

    if (j == 0) {
        j = 1;
        var IndicadorCorrecto = document.getElementById("IndicadorCorrecto");

        var id = setInterval(frame, 10);
        var widthcorecto = 0;

        function frame() {
            if (widthcorecto >= porcentajeCorrectas) {
                clearInterval(id);
                j = 0;
            } else {
                widthcorecto++;
                IndicadorCorrecto.style.widthcorecto = widthcorecto + "%";
                IndicadorCorrecto.innerHTML = widthcorecto + "%";
            }
        }
    }
};