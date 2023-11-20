export const registrar = (user) => {
  if(user["profession"] !== undefined){
    fetch("http://127.0.0.1:8000/createstylist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Ajusta el tipo de contenido según lo que acepte tu backend
    },
    body: JSON.stringify(user), // Convierte los datos del formulario a JSON
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Respuesta del backend:", data);
    })
    .catch((error) => {
      console.log(JSON.stringify(user))
      console.log("Error al enviar la solicitud:", error);
      // Puedes manejar los errores aquí
    });
  } else {
    fetch("http://127.0.0.1:8000/create_user_form", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Respuesta del backend:", data);
    })
    .catch((error) => {
      console.log(JSON.stringify(user))
      console.error("Error al enviar la solicitud:", error);
    });
  }
};