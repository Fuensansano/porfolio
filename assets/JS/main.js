/*
Creamos una variable obteniendo el valor del HTML del input submit con 
el id #enviar
*/
let button = document.querySelector("#enviar");

/*
añadimos un evento al nodo HTML (nodo = elemento/etiqueta html)
más concretamente, el evento click, es decir, le estamos diciendo con JS que cuando se haga click en el botón, va a ocurrir lo que esté escrito en la función sendMail.
*/
button.addEventListener("click", sendMail);

function sendMail(eventClick) {
  eventClick.preventDefault();
  const myMail = "fuensansano@gmail.com";

  const name = document.querySelector("#nombre").value;
  const lastName = document.querySelector("#apellidos").value;
  const comment = document.querySelector("#comentario").value;

  if (name === "" || lastName === "" || comment === "") {
    alert("Algún campo no ha sido rellenado 🧐");
    return;
  }

  const mailto = `mailto:${myMail}?subject=${name} ${lastName}&body=${comment}`;

  document.location = encodeURI(mailto);
}
