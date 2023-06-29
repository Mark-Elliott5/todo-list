const storage = (() => {
  // const projects = JSON.parse(localStorage.getItem('projects'));
  const todos = JSON.parse(localStorage.getItem('todos'));
  const addProject = (project) => {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
  };
  const addTodo = (todo) => {
    todos.push(todo);
  };

  const checkDuplicate = (title) => {
    const projects = JSON.parse(localStorage.getItem('projects'));
    return projects.some((element) => element.title === title);
  };
  // invoke localStorage here
  //     const getProject
  //     const setProject
  //     const addProject
  //     const deleteProject
  //     const setProjectName
  //     const setProjectDescription
  //     const setProjectDueDate
  //     const setProjectPriority
  //   const getTodos
  //   const setTodos
  //   const addTodo
  //   const deleteTodo
  //   const setTodoName
  //   const setTodoDescription
  //   const setTodoDueDate
  //   const setTodoPriority
  return { addProject, addTodo, checkDuplicate };
})();

export default storage;
