import { usuarios } from "../data/users";

export const registrar = (user) => {
  let existe = usuarios.find((u) => {
    return u.correo == user.correo;
  });
  if(!existe){
    user.token = crypto.randomUUID();
    usuarios.push(user);
    console.log(usuarios)
    alert("Usuario registrado")
  } else {
    alert("El usuario ya existe")
  }
};

/* user.token = crypto.randomUUID();
    usuarios.push(user);
    console.log(usuarios) */
