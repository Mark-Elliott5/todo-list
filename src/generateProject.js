const Project = (title, description, index) => {
  const todoList = [];
  const addToProject = (todo) => {
    todoList.push(todo);
    domManipulator.set();
  };
  const obj = { title, description, index, todoList, addToProject };
  return obj;
};
