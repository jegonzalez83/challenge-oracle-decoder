var validacion = false;
var textoEncriptado;
var textoDesencriptado;

window.onload = function () {
	document.getElementById("input-texto").focus();
}


function validarTexto() {

	var inputUsuario = document.getElementById("input-texto").value;

	if ((/[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/.test(inputUsuario)) ||
		(/[0-9]/.test(inputUsuario)) ||
		(/[A-Z]/.test(inputUsuario))) {
		alert("No se permiten caracteres especiales, mayúsculas y/o números");
		validacion = false;
	} else if (inputUsuario == "") {
		alert("Por favor ingrese un texto para encriptar/desencriptar");
		validacion = false;
	} else {
		validacion = true;
	}
}


function encriptarTexto() {

	var inputUsuario = document.getElementById("input-texto").value;

	validarTexto();

	if (validacion == true) {

		textoEncriptado = inputUsuario.replace(/e/g, "enter");
		textoEncriptado = textoEncriptado.replace(/i/g, "imes");
		textoEncriptado = textoEncriptado.replace(/a/g, "ai");
		textoEncriptado = textoEncriptado.replace(/o/g, "ober");
		textoEncriptado = textoEncriptado.replace(/u/g, "ufat");

		document.getElementById("msg").value = textoEncriptado;
		document.getElementById("input-texto").value = "";

		var encabezado = document.getElementById("textoIngresado");
		encabezado.textContent = "Mensaje Encriptado:";
	}
}



function desencriptarTexto() {

	var inputUsuario = document.getElementById("input-texto").value;

	validarTexto();

	if (validacion == true) {

		textoDesencriptado = inputUsuario.replace(/enter/g, "e");
		textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
		textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
		textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
		textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");

		document.getElementById("msg").value = textoDesencriptado;
		document.getElementById("input-texto").value = "";

		var encabezado = document.getElementById("textoIngresado");
		encabezado.textContent = "Mensaje Desencriptado:";
	}
}


function evitarRecarga(event) {

	event.preventDefault();
	return false;

}


function copiarTexto() {

	var textoCopiado = document.getElementById("msg");
	textoCopiado.select();
	navigator.clipboard.writeText(textoCopiado.value);

}
function borrarTexto() {
	document.getElementById("encabezado").value = "";
	document.getElementById("msg").value = "";
}


