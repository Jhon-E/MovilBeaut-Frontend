import { Avatar, Dropdown, Navbar } from "flowbite-react";

export const Navigation = () => {
  return (
      <Navbar fluid className=" z-10 sticky w-full bg-slate-200">
        <Navbar.Brand href="https://flowbite-react.com">
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
              <span className="block text-sm">Jhoneiker Ospino</span>
              <span className="block truncate text-sm font-medium">
                nombreUsuario@gmail.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Editar perfil</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Cerrar sesión</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#">Inicio</Navbar.Link>
          <Navbar.Link href="/iniciar-sesion">Iniciar sesion</Navbar.Link>
          <Navbar.Link href="#">Registrarse</Navbar.Link>
          <Navbar.Link href="#">Solicitar profesional</Navbar.Link>
          <Navbar.Link href="#">Contactos</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
  );
};
