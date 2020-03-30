function validar(){

    var nombre, id, cantidad, fecha;

    var expresion;

    nombre = document.getElementById("nombreMedicina").value;

    id = document.getElementById("idMedicina").value;

    cantidad = document.getElementById("cantidadMedicina").value;

    fecha = document.getElementById("fechaMedicina").value;

    if(nombre == null || nombre.length == 0){
        alert("Todos los campos son obligatorios");
        return false;
    }

    if(/^\s+$/.test(nombre)){
        alert("No puedes enviar espacios");
        return false;
    }

    if(id == null || id.length == 0){
        alert("Nombre no valido");
        return false;
    }

    if(/^\s+$/.test(id)){
        alert("No puedes enviar espacios");
        return false;
    }

    if(cantidad == null || cantidad.length == 0){
        alert("Todos los campos son obligatorios");
        return false;
    }

    if(/^\s+$/.test(cantidad)){
        alert("No puedes enviar espacios");
        return false;
    }

    if(fecha == null || fecha.length == 0){
        alert("Todos los campos son obligatorios");
        return false;
    }
    
    if(/^\s+$/.test(fecha)){
        alert("No puedes enviar espacios");
        return false;
    }

    

}