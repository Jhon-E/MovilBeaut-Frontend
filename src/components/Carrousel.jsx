import { Carousel } from "flowbite-react";
import { Button } from "./Button";

export const Carrousel = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
      <Carousel className=" absolute h-1/2 " slideInterval={2000}>
        <div className="flex h-full items-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <Button clases=" absolute left-12 text-l">
            Solicitar un barbero
          </Button>
          <img
            src="https://cdn2.hubspot.net/hubfs/2356021/Barberia.png"
            className=" object-cover w-full"
            alt="Barbero laborando"
          />
        </div>
        <div className="flex h-full items-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <Button clases=" absolute left-12 text-l">
            Solicitar un estilista
          </Button>
          <img
            src="https://d3puay5pkxu9s4.cloudfront.net/curso/4264/800_imagen.jpg"
            className=" object-cover w-full"
            alt="Estilista"
          />
        </div>
        <div className="flex h-full items-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <Button clases=" absolute left-12 text-l">
            Solicitar un manicurista o pedicurista
          </Button>
          <img
            src="https://selecciones.com.mx/wp-content/uploads/2022/03/esto-piensan-los-manicuristas-cuando-vas-a-hacerte-las-unas.jpg"
            className=" object-cover w-full"
            alt="Manicure"
          />
        </div>
      </Carousel>
    </div>
  );
};
