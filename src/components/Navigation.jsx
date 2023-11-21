import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useState, useEffect } from "react";
useState

export const Navigation = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    setUsername(localStorage.getItem("username"));
    setEmail(localStorage.getItem("email"));
    console.log("Información del usuario:", username, email);
  }, [username, email]);
  return (
    <Navbar fluid className=" z-10 sticky w-full bg-slate-200">
      <Navbar.Brand href="#">
        <img
          src="src\assets\MovilBeauté.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          MovilBeauté
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="src\assets\iconoUser.png"
              rounded
              className=" mr-2"
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{localStorage.getItem("username")}</span>
            <span className="block truncate text-sm font-medium">{localStorage.getItem("email")}</span>
          </Dropdown.Header>
          <Dropdown.Item>Editar perfil</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="/">Cerrar sesión</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#">Inicio</Navbar.Link>
        <Navbar.Link href="/">Iniciar sesion</Navbar.Link>
        <Navbar.Link href="/registrarse">Registrarse</Navbar.Link>
        <Navbar.Link href="#">Contactos</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
