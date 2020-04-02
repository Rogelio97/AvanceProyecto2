
function factorial (factorial){
	var factorial = 1;
 
        for (var i=1; i <= document.getElementById ('n').value; i++){
            factorial *= i;
        }
 
        document.getElementById ('resultado').value = factorial;
}