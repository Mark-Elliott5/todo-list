const storage = (() => {
  // const projects = JSON.parse(localStorage.getItem('projects'));
  const todos = JSON.parse(localStorage.getItem('todos'));
  const addProject = (project) => {
    if (!JSON.parse(localStorage.getItem('projects'))) {
      const projects = [project];
      localStorage.setItem('projects', JSON.stringify(projects));
    } else {
      const projects = JSON.parse(localStorage.getItem('projects'));
      projects.push(project);
      localStorage.setItem('projects', JSON.stringify(projects));
    }
  };
  const addTodo = (todo) => {
    todos.push(todo);
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
  return { addProject, addTodo };
})();

export default storage;
