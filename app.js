let amigos = [];

 function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;

     if (nombreAmigo.trim() === "") { 
      alert("Por favor,ingrese un nombre valido");
  } 
  
         else {

               amigos.push(nombreAmigo);
               document.querySelector("#amigo").value = "";
               mostrarListaAmigo();
              }
}
 
 function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

         for (let i = 0; i < amigos.length; i++) {
              const element = amigos[i];

              let listaHTML = document.createElement("li");
              listaHTML.textContent = element;
              listaAmigos.appendChild(listaHTML);
             
              
   }
  
}



 function sortearAmigo() {
  let cantidadAmigos = amigos.length;
     if (cantidadAmigos === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
  }      else {
               let indiceAmigo = Math.floor(Math.random() * cantidadAmigos); 
               let resultadoHTML = document.querySelector("#resultado");
               listaAmigos.innerHTML = ""; 
             resultadoHTML.innerHTML = `El amigo secreto sorteado es: ${amigos[indiceAmigo]}`;
              
  }
}