import axios from "axios";

const getTasks = async () => {
  try {
    // Hace la petición al backend
    const result = await axios.get(import.meta.env.VITE_BACKEND_URL);

    // Verifica el éxito de la petición
    if (result.status === 200) {
      return result.data;
    }
  } catch (error) {
    console.error("No hubo conexión al backend");
    return null;
  }
};

export default getTasks;
