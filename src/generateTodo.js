const Todo = (
  title,
  description,
  duedate,
  priority,
  subtodo,
  project = false,
  done = false
) => {
  const obj = {
    title,
    description,
    duedate,
    priority,
    subtodo,
    project,
    done,
  };
  return obj;
};

export default Todo;
