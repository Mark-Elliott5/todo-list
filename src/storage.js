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
    const list = type === true ? getProjects() : getTodos();
    const input = type === true ? 'projects' : 'todos';
    localStorage.setItem(
      input,
      JSON.stringify(list.filter((element) => element.title !== item))
    );
  };

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
        localStorage.getItem(type === 'projects' ? 'projects' : 'todos')
      ) || [];
    return items.some((element) => element.title === title);
  };

  return {
    addItem,
    checkDuplicate,
    getTodos,
    getProjects,
    markDone,
    deleteItem,
  };
})();

export default storage;
