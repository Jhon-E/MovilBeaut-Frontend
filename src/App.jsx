import { Navigation } from "./components/Navigation";
import { BuscarComponente } from "./components/BuscarComponente";

function App() {
  return (
    <>
      <Navigation/>
      <section className="absolute flex flex-col items-center justify-evenly gap-12 -z-10 top-0 h-screen container w-full bg-slate-300 p-32">
        <h1 className=" font-bold self-start">SOLICITAR PROFESIONAL</h1>
        <section className="buscador w-full p-3 gap-3 flex flex-col h-full">
          <BuscarComponente />
        </section>
      </section>
      <section className="solicitudes"></section>
    </>
  );
}

export default App;
