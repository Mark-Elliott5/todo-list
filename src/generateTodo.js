const Todo = (title, description, dueDate, priority) => {
  const setTitle = (input) => {
    obj.title = input;
  };
  const setDesc = () => {};
  const setDueDate = () => {};
  const setPriority = () => {};
  const getTitle = () => obj.title;
  const getDesc = () => obj.description;
  const getDueDate = () => obj.dueDate;
  const getPriority = () => obj.priority;
  const obj = {
    title,
    description,
    dueDate,
    priority,
    setTitle,
    setDesc,
    setDueDate,
    setPriority,
    getTitle,
    getDesc,
    getDueDate,
    getPriority,
  };
  return obj;
};
