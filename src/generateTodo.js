const Todo = (title, description, duedate, priority, id) => {
  const setTitle = (input) => {
    obj.name = input;
  };
  const setDescription = (input) => {
    obj.description = input;
  };
  const setDueDate = (input) => {
    obj.duedate = input;
  };
  const setPriority = () => {
    obj.priority = input;
  };
  const getTitle = () => obj.title;
  const getDescription = () => obj.description;
  const getDueDate = () => obj.duedate;
  const getPriority = () => obj.priority;
  const getID = () => obj.id;
  const obj = {
    title,
    description,
    duedate,
    priority,
    id,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getID,
  };
  return obj;
};

export default Todo;
