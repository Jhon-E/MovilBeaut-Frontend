import { useEffect, useState } from "react";
import { CardUser } from "./CardUser";
import { TextInput, Label } from "flowbite-react";

export const BuscarComponente = () => {
  const [users, setUsers] = useState([]);
  const [search, setSeacrh] = useState("");

  const URL = "https://jsonplaceholder.typicode.com/users";
  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data);
  };

  const searcher = (e) => {
    setSeacrh(e.target.value);
  };

  let result = []
  if(!search){
    result = users
  } else {
    result = users.filter( (dato) => 
      dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
  }

  useEffect(() => {
    showData();
  }, []);
  showData();
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
      <aside className=" w-full flex items-center justify-center gap-2 overflow-y-hidden ml">
        <div className="container mr-8"></div>
        {result.map((user) => (
          <CardUser nombre={user.name} prof="" key={user.id} />
        ))}
      </aside>
    </>
  );
};
