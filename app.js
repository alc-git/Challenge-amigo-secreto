
let amigos = [];


function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();

    
    if (nombre === "")
    {
        alert("Por favor escribe un nombre");
        return;
    }


      let soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
      if (!soloLetras.test(nombre)) {
        alert("Solo se permiten letras y espacios.");
        return;
      }

    amigos.push(nombre);
    document.getElementById("amigo").value = "";
    mostrarLista();
}


function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++)
    {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}


function sortearAmigo() {
    if (amigos.length < 2)
    {
        alert("Debes ingresar al menos 2 nombres");
    }
    else
    {
        let aleatorio = Math.floor(Math.random() * amigos.length);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "";

        let item = document.createElement("li");
        item.textContent = "El amigo secreto es: " + amigos[aleatorio];
        resultado.appendChild(item);
    }
}