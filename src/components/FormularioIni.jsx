import { Button, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import "../Styles/styles.css";
import { useState } from "react";
import { showData } from "../data/users";

export const FormularioIni = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // FUNCION QUE BUSCA Y COMPARA LOS VALORES DE LOS INPUTS CON LA BASE DE DATOS Y CAMBIA DE RUTA EN CASO DE EXITO.

  const log_in = (e) => {
    e.preventDefault();

    let usuario = {
      email: email,
      password: pass,
    };
    console.log(JSON.stringify(usuario));
    fetch("http://127.0.0.1:8000/validUser", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
      .then((response) => {
        if (response.ok) {
          // Manejar la redirección manualmente en el frontend
          window.location.href = "http://localhost:5173/inicio";
        } else {
          // Manejar otros casos según sea necesario
          console.error("Error en la autenticación", response.status);
        }
      })
      .then((data) => {
        console.log("Respuesta del backend:", data);
      })
      .catch((error) => {
        console.error("Error en la redirección:", error);
      });
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
