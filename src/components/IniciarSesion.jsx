import { FormularioIni } from "./FormularioIni";

export const IniciarSesion = () => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <FormularioIni></FormularioIni>
      <section className=" w-full h-screen bg-red-950">
        <img
          src="src\assets\MovilBeauté.png"
          alt="Logo movilBeaute"
          className=" object-cover w-full h-full"
        />
      </section>
    </div>
  );
};
