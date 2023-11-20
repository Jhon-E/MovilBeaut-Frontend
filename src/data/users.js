const URL = "http://127.0.0.1:8000/getstylists";

const showData = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data; // Retorna directamente los datos, no una promesa
};

// Exporta la función para poder llamarla desde otros módulos
export { showData };
