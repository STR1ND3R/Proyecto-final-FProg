

//al presionar se añade el numero de asiento al campo con el mismo nombre
function seleccionarAsiento(id){

	document.getElementById("asiento").value = id
	
}


function reservar(){

	var nombre = String(document.getElementById("nombre").value)
	var asiento  = parseInt(document.getElementById("asiento").value)
	let valido = true
	//validar que los datos sean correctos, de no serlo, hacerlo saber al usuario
	if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
		document.getElementById("alerta_nombre").innerText = "El campo de nombre es obligatorio"
		valido = false
	}
	if(isNaN(asiento)){
		document.getElementById("alerta_asiento").innerText = "Por favor ingrese un numero de asiento valido"
		valido = false
		
	}

	if(valido){
		alert("kk")
		localStorage.setItem("dueño_asiento_"+asiento, nombre)
		localStorage.setItem("estatus_asiento_"+asiento, "reservado")
		document.getElementById(String(asiento)).setAttribute("style", "background-color:red")

	}





}
//funcion para modificar una reservacion
function modificar(){



}
// funcion para probar código experimental
function pruebas(){
	localStorage.clear()
}




//Al presionar el botón el programa intentará realizar la reservación, si el lugar esta disponible se realizará la reservación, 
//pero si el lugar está ocupado el programa mostrará un mensaje indicando que el lugar ya está ocupado y deberá seleccionar otro lugar.
