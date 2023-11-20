import { Card, Dropdown, Avatar } from "flowbite-react";

export const CardUser = ({ nombre, prof }) => {
  const solicitado = () => {
    console.log(nombre)
  }
  return (
    <Card className="h-auto flex justify-center items-center">
      <div className="flex flex-col items-center w-40">
        <Avatar
          alt="Bonnie image"
          height="96"
          src="src\assets\iconoUser.png"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-l font-medium text-gray-900 dark:text-white">
          {nombre}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {prof}
        </span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <button className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          onClick={solicitado}>
            Solicitar
          </button>
        </div>
      </div>
    </Card>
  );
};
