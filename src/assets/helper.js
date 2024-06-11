document.getElementById("btonSubmit").addEventListener("click", valida);

function valida(){
    alert("Aqui estoy perros");
    var usuario = document.getElementById("nombre_usuario").value;
    var clave = document.getElementById("contrasena").value;

    if (usuario == ""){
        document.getElementById("spusuario").removeAttribute("hidden");
    } else {
        document.getElementById("spusuario").setAttribute("hidden", "");
    }

    if (clave == ""){
        document.getElementById("spclave").removeAttribute("hidden");
    } else {
        document.getElementById("spclave").setAttribute("hidden", "");
    }
}