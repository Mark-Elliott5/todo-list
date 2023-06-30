import gettersAndSetters from './gettersAndSetters';

const storage = (() => {
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

  const checkDuplicate = (title, type) => {
    const items =
      JSON.parse(
        localStorage.getItem(type === 'Project' ? 'projects' : 'todos')
      ) || [];
    return items.some((element) => element.title === title);
  };

  const getTodos = () => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  };

  const getProjects = () => {
    const projects = JSON.parse(localStorage.getItem('projects'));
    return projects;
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
  return { addProject, addTodo, checkDuplicate, getTodos, getProjects };
})();

export default storage;
