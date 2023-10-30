import { GET, ADD, DELETE } from "./actions";

const taskReducer = (state, action) => {
  switch (action.type) {
    case GET:
      return action.tasks ? [...action.tasks] : [];
    case ADD:
      return [...state, action.newTask];
    case DELETE:
      return state.filter((task) => task.id !== action.id);
    default:
      break;
  }
};

export default taskReducer;
