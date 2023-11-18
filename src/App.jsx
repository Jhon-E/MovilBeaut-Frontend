import { Carrousel } from "./components/Carrousel";
import { Navigation } from "./components/Navigation";
import { CardUser } from "./components/CardUser";
import { BuscarComponente } from "./components/BuscarComponente";

function App() {
  return (
    <>
      <Navigation />
      <section className="absolute flex flex-col items-center justify-evenly gap-12 -z-10 top-0 h-screen container w-full bg-slate-300 p-12">
        <h1 className=" font-bold self-start">SOLICITAR PROFESIONAL</h1>
        <section className="buscador w-full p-3 gap-3 flex flex-col">
          <BuscarComponente />
        </section>
      </section>
    </>
  );
}

export default App;
