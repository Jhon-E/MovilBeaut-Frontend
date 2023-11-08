import { Button, Label, TextInput } from "flowbite-react";
import { HiMail, HiUser } from "react-icons/hi";
import "../Styles/styles.css"

export const FormularioRe = () => {
  return (
    <aside className="cont w-full flex flex-col bg-slate-200 p-5 justify-center items-center">
      <h1 className=" text-xl block">
        <b>Crear una cuenta</b>
      </h1>
      <form className="flex max-w-md flex-col gap-4 w-full">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Nombre" />
          </div>
          <TextInput
            id="name"
            type="text"
            icon={HiUser}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Correo" />
          </div>
          <TextInput
            id="email1"
            type="email"
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
            helperText={
              <>
                Ya tengo una
                <a
                  href="/registrarse"
                  className="ml-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  cuenta.
                </a>
              </>
            }
          />
        </div>
        <div className="flex items-center gap-2"></div>
        <Button type="submit">Registrarme</Button>
      </form>
    </aside>
  );
};