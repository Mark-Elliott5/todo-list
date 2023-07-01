const storage = (() => {
  const getTodos = () => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  };

  const getProjects = () => {
    const projects = JSON.parse(localStorage.getItem('projects'));
    return projects;
  };

  const addItem = (item, type) => {
    let list;
    if (type === 'projects') {
      list = JSON.parse(localStorage.getItem('projects'));
    } else if (type === 'todos') {
      list = JSON.parse(localStorage.getItem('todos'));
    } else {
      list = [];
    }
    list.push(item);
    localStorage.setItem(type, JSON.stringify(list));
  };

  const deleteItem = (item, type) => {
    const [list, input] = type
      ? [getProjects(), 'projects']
      : [getTodos(), 'todos'];
    localStorage.setItem(
      input,
      JSON.stringify(list.filter((element) => element.title !== item))
    );
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

  const checkDuplicate = (title, type) => {
    const items =
      JSON.parse(
        localStorage.getItem(type === 'projects' ? 'projects' : 'todos')
      ) || [];
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
  };
})();

export default storage;
