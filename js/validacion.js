function calcularInteres() {
    var capital = parseFloat(document.getElementById("capital1").value);
    var interes = capital * 0.02;
    var total = capital + interes; // Calculamos el total con el interés incluido
    var resultadoHTML = "El dinero ganado después de un mes es: $" + interes.toFixed(2) + ". El total con el interés es: $" + total.toFixed(2);
    document.getElementById("resultado1").innerHTML = resultadoHTML;
    return false;
}


function calcularComision() {
    var sueldoBase = parseFloat(document.getElementById("sueldo").value);
    var venta1 = parseFloat(document.getElementById("venta1").value);
    var venta2 = parseFloat(document.getElementById("venta2").value);
    var venta3 = parseFloat(document.getElementById("venta3").value);
    var comision = (venta1 + venta2 + venta3) * 0.1;
    var totalMes = sueldoBase + comision;
    var resultadoHTML = "El vendedor recibirá $" + comision.toFixed(2) + " por comisiones y $" + totalMes.toFixed(2) + " en total este mes.";
    document.getElementById("resultado2").innerHTML = resultadoHTML;
    return false;
}

function calcularDescuento() {
    var montoCompra = parseFloat(document.getElementById("montoCompra").value);
    var descuento = montoCompra * 0.15;
    var totalPagar = montoCompra - descuento;
    var resultadoHTML = "El descuento aplicado es de $" + descuento.toFixed(2) + ". El total a pagar es de $" + totalPagar.toFixed(2);
    document.getElementById("resultado3").innerHTML = resultadoHTML;
    return false;
}

function calcularCalificacion() {
    var parcial1 = parseFloat(document.getElementById("parcial1").value);
    var parcial2 = parseFloat(document.getElementById("parcial2").value);
    var parcial3 = parseFloat(document.getElementById("parcial3").value);
    var examenFinal = parseFloat(document.getElementById("examenFinal").value);
    var trabajoFinal = parseFloat(document.getElementById("trabajoFinal").value);
    var promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
    var calificacionFinal = promedioParciales * 0.55 + examenFinal * 0.30 + trabajoFinal * 0.15;
    var resultadoHTML = "La calificación final es: " + calificacionFinal.toFixed(2);
    document.getElementById("resultado4").innerHTML = resultadoHTML;
    return false;
}

function calcularPorcentaje() {
    var totalEstudiantes = parseFloat(document.getElementById("totalEstudiantes").value);
    var numHombres = parseFloat(document.getElementById("numHombres").value);
    var porcentajeHombres = (numHombres / totalEstudiantes) * 100;
    var porcentajeMujeres = 100 - porcentajeHombres;
    var resultadoHTML = "Porcentaje de hombres: " + porcentajeHombres.toFixed(2) + "%. Porcentaje de mujeres: " + porcentajeMujeres.toFixed(2) + "%";
    document.getElementById("resultado5").innerHTML = resultadoHTML;
    return false;
}

function calcularEdad() {
    var diaNacimiento = parseInt(document.getElementById("diaNacimiento").value);
    var mesNacimiento = parseInt(document.getElementById("mesNacimiento").value);
    var anioNacimiento = parseInt(document.getElementById("anioNacimiento").value);
    var diaActual = parseInt(document.getElementById("diaActual").value);
    var mesActual = parseInt(document.getElementById("mesActual").value);
    var anioActual = parseInt(document.getElementById("anioActual").value);
    
    var edad = anioActual - anioNacimiento;
    
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    }
    
    var resultadoHTML = "La edad es: " + edad;
    document.getElementById("resultado6").innerHTML = resultadoHTML;
    return false;
}
