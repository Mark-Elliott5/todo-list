const todo = (title, description, dueDate, priority) => {
  const updateTitle = () => {};
  const updateDesc = () => {};
  const updateDueDate = () => {};
  const updatePriority = () => {};
  const obj = { title, description, dueDate, priority };
  return obj;
};

const project = () => {
  const todoList = [];
  const addToProject = (todo) => {
    todoList.push(todo);
    domManipulator.update();
  };
  const obj = { todoList, addToProject };
  return obj;
};
