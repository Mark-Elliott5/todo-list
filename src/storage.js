const storage = (() => {
  const getTodos = () => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  };

  const getProjects = () => {
    const projects = JSON.parse(localStorage.getItem('projects'));
    return projects;
  };

  const addProject = (project) => {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
  };
  const addTodo = (todo) => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const deleteItem = (item, type) => {
    const list = type === true ? getProjects() : getTodos();
    const input = type === true ? 'projects' : 'todos';
    localStorage.setItem(
      input,
      JSON.stringify(list.filter((element) => element.title !== item))
    );
  };

  // const deleteProject = (project) => {
  //   const projects = getProjects();
  //   localStorage.setItem(
  //     'projects',
  //     JSON.stringify(projects.filter((element) => element.title !== project))
  //   );
  // };

  // const deleteTodo = (todo) => {
  //   const todos = getTodos();
  //   // const targetTodo = todos.find((element) => element.title === todo);
  //   // todos.splice(targetTodo, 1);
  //   localStorage.setItem(
  //     'todos',
  //     JSON.stringify(todos.filter((element) => element.title !== todo))
  //   );
  // };

  const markDone = (name, project) => {
    const list = project === true ? getProjects() : getTodos();
    const type = project === true ? 'projects' : 'todos';
    const target = list.find((element) => element.title === name);
    target.done = !target.done;
    console.log(list);
    localStorage.setItem(type, JSON.stringify(list));
  };

  const checkDuplicate = (title, type) => {
    const items =
      JSON.parse(
        localStorage.getItem(type === 'Project' ? 'projects' : 'todos')
      ) || [];
    return items.some((element) => element.title === title);
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
  return {
    addProject,
    addTodo,
    checkDuplicate,
    getTodos,
    getProjects,
    // deleteTodo,
    // deleteProject,
    markDone,
    deleteItem,
  };
})();

export default storage;
