const storage = (() => {
  const getTodos = () => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  };

  const getProjects = () => {
    const projects = JSON.parse(localStorage.getItem('projects'));
    return projects;
  };

  const getSubtodos = (project) => {
    const projects = getProjects();
    const target = projects.find((element) => element.title === project);
    const subtodos = target.todos;
    return subtodos;
  };

  const addSubtodo = (item, project) => {
    const projects = getProjects();
    const target = projects.find((element) => element.title === project);
    const subtodos = target.todos;
    subtodos.push(item);
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const addItem = (item, type) => {
    let list;
    if (type === 'project') {
      list = getProjects();
    } else if (type === 'todo') {
      list = getTodos();
    } else {
      list = [];
    }
    list.push(item);
    localStorage.setItem(type, JSON.stringify(list));
  };

  const deleteItem = (todoName, projectName) => {
    const list = getProjects();
    const project = list.find((element) => element.title === projectName);
    project.todos = project.todos.filter(
      (element) => element.title !== todoName
    );
    localStorage.setItem('projects', JSON.stringify(list));
  };

  const markDone = (name, project) => {
    const [list, type] = project
      ? [getProjects(), 'projects']
      : [getTodos(), 'todos'];
    const target = list.find((element) => element.title === name);
    target.done = !target.done;
    console.log(list);
    localStorage.setItem(type, JSON.stringify(list));
    return target.done;
  };

  const checkDuplicate = (title, type, project) => {
    let items;
    if (type === 'project') {
      items = getProjects();
    } else if (type === 'todo') {
      items = getTodos();
    } else if (type === 'subtodo') {
      items = getSubtodos(project);
    } else {
      items = [];
    }
    return items.some((element) => element.title === title);
  };

  const changePriority = (name, project) => {
    const [list, type] = project
      ? [getProjects(), 'projects']
      : [getTodos(), 'todos'];
    // if (subtodo && project) {
    //   const subtodoList = list.find(
    //     (element) => element.title === 'Test9'
    //   ).todos;
    //   const target = subtodoList.find((element) => (element.name === subtodo));
    // }
    // if (!project)
    const target = list.find((element) => element.title === name);
    if (target.priority === 'low') {
      target.priority = 'normal';
    } else if (target.priority === 'normal') {
      target.priority = 'high';
    } else if (target.priority) {
      target.priority = 'low';
    }
    localStorage.setItem(type, JSON.stringify(list));
    return target.priority;
  };

  return {
    addItem,
    checkDuplicate,
    getTodos,
    getProjects,
    markDone,
    deleteItem,
    changePriority,
    addSubtodo,
  };
})();

export default storage;
