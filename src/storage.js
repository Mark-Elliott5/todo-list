const storage = (() => {
  const getTodos = () => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  };

  const addItem = (item) => {
    const list = getTodos() || [];
    list.push(item);
    localStorage.setItem('todos', JSON.stringify(list));
  };

  const deleteItem = (item) => {
    const list = getTodos();
    localStorage.setItem(
      'todos',
      JSON.stringify(list.filter((element) => element.title !== item))
    );
  };

  const markDone = (name) => {
    const list = getTodos();
    const target = list.find((element) => element.title === name);
    target.done = !target.done;
    console.log(list);
    localStorage.setItem('todos', JSON.stringify(list));
    return target.done;
  };

  const checkDuplicate = (title) => {
    const items = getTodos() || [];
    return items.some((element) => element.title === title);
  };

  const changePriority = (name) => {
    const list = getTodos();
    const target = list.find((element) => element.title === name);
    if (target.priority === 'low') {
      target.priority = 'normal';
    } else if (target.priority === 'normal') {
      target.priority = 'high';
    } else if (target.priority) {
      target.priority = 'low';
    }
    localStorage.setItem('todos', JSON.stringify(list));
    return target.priority;
  };

  return {
    addItem,
    checkDuplicate,
    getTodos,
    markDone,
    deleteItem,
    changePriority,
  };
})();

export default storage;
