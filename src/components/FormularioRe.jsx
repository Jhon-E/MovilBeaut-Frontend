import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { HiMail, HiUser, HiHome } from "react-icons/hi";
import "../Styles/styles.css";
import { usuarios } from "../data/users";
import { useState } from "react";
import { registrar } from "./registrarUsuario";

export const FormularioRe = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [address, setAddress] = useState(null);

  const sig_in = (e) => {
    e.preventDefault();
    console.log(/\w+@gmail.com$/g.test(email));
    console.log(pass.length >= 8 && pass.length <= 15);
    let usuario = null;
    if (pass.length >= 8 && pass.length <= 15) {
      if (/@gmail.com$/g.test(email)) {
        usuario = {
          token: crypto.randomUUID(),
          correo: email,
          password: pass,
          name: name,
          direccion: address,
        };
        registrar(usuario);
        /* window.location.pathname = "/"; */
      } else {
        alert("Correo invalido")
      }
    } else {
      alert("Contraseña invalida")
    }
  };

  return (
    <aside className="cont w-full flex flex-col bg-slate-200 p-5 justify-center items-center">
      <h1 className=" text-xl block">
        <b>Crear una cuenta</b>
      </h1>
      <form className="flex max-w-md flex-col gap-4 w-full" onSubmit={sig_in}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Nombre" />
          </div>
          <TextInput
            id="name"
            type="text"
            icon={HiUser}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="address" value="Dirección" />
          </div>
          <TextInput
            id="direccion"
            type="address"
            icon={HiHome}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Correo" />
          </div>
          <TextInput
            id="email1"
            type="email"
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
            id="password1"
            type="password"
            required
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="termsAcept" defaultChecked required />
          <Label htmlFor="termsAcept" className="flex">
            Acepto los terminos y condiciones.
          </Label>
        </div>
        <div className="flex items-center gap-2"></div>
        <Button type="submit">Registrarme</Button>
      </form>
    </aside>
  );
};
