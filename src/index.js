import domManipulator from "./domManipulator.js";

const todo = (title, description, dueDate, priority) => {
  const setTitle = (input) => {
    obj.title = input;
  };
  const setDesc = () => {};
  const setDueDate = () => {};
  const setPriority = () => {};
  const getTitle = () => obj.title;
  const getDesc = () => {};
  const getDueDate = () => {};
  const getPriority = () => {};
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

const project = (title, description) => {
  const todoList = [];
  const addToProject = (todo) => {
    todoList.push(todo);
    domManipulator.set();
  };
  const obj = { todoList, addToProject };
  return obj;
};

const appLogic = () => {
  const createProject = (title, description) => {
    const newProject = new project(title, description);
  };
  const markComplete = () => {};
  const changePriority = () => {};
};
