import axios from "axios";

const createTask = async (text) => {
  try {
    // Crea un objeto para la nueva tarea
    const newTask = {
      text,
    };
    // Crea la tarea en el backend
    const result = await axios.post(import.meta.env.VITE_BACKEND_URL, newTask);
    // Verificación de éxito de la operación
    if (result.status === 201) {
      return result.data;
    }
  } catch (error) {
    console.log("Hubo un error de comunicación creando la tarea!");
    return null;
  }
};

export default createTask;
