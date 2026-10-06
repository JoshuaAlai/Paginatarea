function calcularAlquiler() {

    let precio = parseFloat(document.getElementById("cboCancha").value);
    let horas = parseInt(document.getElementById("txtHoras").value);


    let adicional = 0;
    if (document.getElementById("rbNoche").checked) {
        adicional = 20;
    } else {
        adicional = 0;
    }


    let costoHora = precio + adicional;
    let subtotal = costoHora * horas;
    let descuento = 0;


    if (horas >= 4) {
        descuento = subtotal * 0.15;
    } else if (horas >= 2) {
        descuento = subtotal * 0.10;
    } else {
        descuento = 0;
    }

    let total = subtotal - descuento;


    document.getElementById("txtSubtotal").value = "S/ " + subtotal.toFixed(2);
    document.getElementById("txtDescuento").value = "S/ " + descuento.toFixed(2);
    document.getElementById("txtTotal").value = "S/ " + total.toFixed(2);
}

function limpiarCancha() {

    document.getElementById("cboCancha").value = "60";
    document.getElementById("txtHoras").value = "1";
    document.getElementById("rbDia").checked = true;
    document.getElementById("txtSubtotal").value = "";
    document.getElementById("txtDescuento").value = "";
    document.getElementById("txtTotal").value = "";
}