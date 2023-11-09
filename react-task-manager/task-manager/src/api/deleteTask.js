import axios from "axios";

const deleteTask = async (id) => {
  try {
    // Elimina la tarea del backend
    const result = await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}${id}`
    );
    if (result.status === 200) {
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default deleteTask;
