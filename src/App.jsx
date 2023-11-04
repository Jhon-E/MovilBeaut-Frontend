import { Button } from "./components/Button";
import { Carrousel } from "./components/Carrousel";

function App() {
  return (
    <>
      <nav className="flex justify-center top-0 left-0 text-slate-100 z-10 w-full">
        <div className="h-full flex flex-row justify-between w-4/5 px-10 py-5 items-center">
          <section className="flex flex-row gap-10 items-center">
            <div className=" w-8 h-8 rounded-full">
              <img
                className=" object-cover cursor-pointer"
                src="src\assets\iconoUser.png"
                alt="Foto Perfil Usuario"
              />
            </div>
            <div className=" w-6 h-6 rounded-full">
              <img
                className=" object-cover cursor-pointer"
                src="src\assets\notification.png"
                alt="Foto Perfil Usuario"
              />
            </div>
          </section>
          <section className="flex flex-row gap-8">
            <Button>Log In</Button>
            <Button>Sign in</Button>
          </section>
        </div>
      </nav>
      <Carrousel></Carrousel>
    </>
  );
}

export default App;
