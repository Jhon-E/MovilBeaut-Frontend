import { useEffect, useState } from "react";
import { CardUser } from "./CardUser";
import { TextInput, Label } from "flowbite-react";
import { showData } from "../data/users";

export const BuscarComponente = () => {
  const [users, setUsers] = useState([]);
  const [search, setSeacrh] = useState("");

  const obtenerUsuarios = async () => {
    const data = await showData();
    console.log("Datos obtenidos:", data);
    setUsers(data);
  };

  useEffect(() => {
    obtenerUsuarios();
  }, [search]);

  const searcher = (e) => {
    setSeacrh(e.target.value);
  };

  let result = [];
  if (!search) {
    result = users;
  } else {
    result = users.filter((dato) =>
      dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  return (
    <>
      <Label htmlFor="search" value="Buscar" />
      <TextInput
        id="search"
        type="text"
        onChange={searcher}
        value={search}
        placeholder="Manicurista-Pedicurista-Barbero-Estilista"
        autoComplete="off"
      />
      <aside className="container flex items-center h-full">
        <div className="relative flex-wrap w-full flex items-center justify-center gap-2 overflow-auto h-4/5 p-6">
          {result.map((user) => (
            <CardUser nombre={user.name} prof={user.profession} key={user.id} />
          ))}
        </div>
      </aside>
    </>
  );
};
