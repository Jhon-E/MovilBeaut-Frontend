import { Button, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import "../Styles/styles.css";
import { useState } from "react";
import { usuarios } from "../data/users";

("use client");

export const FormularioIni = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // FUNCION QUE BUSCA Y COMPARA LOS VALORES DE LOS INPUTS CON LA BASE DE DATOS Y CAMBIA DE RUTA EN CASO DE EXITO.

  const log_in = (e) => {
    e.preventDefault();
    if (pass.length >= 8 && pass.length <= 15) {
      let usuario;
      usuario = usuarios.find((user) => {
        return user.correo == email;
      });

      if (usuario.correo === email && usuario.password === pass) {
        window.location.pathname = "/inicio";
      } else {
        alert("Usuario no existe.");
      }
    } else {
      alert("La contraseña es invalida");
    }
  };

  return (
    <aside className="cont w-full flex flex-col bg-slate-200 p-5 justify-center items-center">
      <h1 className=" text-xl block">
        <b>Iniciar sesión</b>
      </h1>
      <form className="flex max-w-md flex-col gap-4 w-full" onSubmit={log_in}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Correo" />
          </div>
          <TextInput
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ejemplo@gmail.com"
            icon={HiMail}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Contraseña" />
          </div>
          <TextInput
            name="password1"
            type="password"
            onChange={(e) => setPass(e.target.value)}
            required
            helperText={
              "La contraseña debe tener minimo 8 carácteres y máximo 15."
            }
          />
        </div>
        <p>
          No tengo una cuenta,
          <a
            href="/registrarse"
            className="ml-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
          >
            registrarme.
          </a>
        </p>
        <div className="flex items-center gap-2"></div>
        <Button type="submit">Ingresar</Button>
      </form>
    </aside>
  );
};
