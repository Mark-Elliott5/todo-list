const Todo = (
  title,
  description,
  duedate,
  priority,
  project = false,
  done = false
) => {
  const obj = {
    title,
    description,
    duedate,
    priority,
    project,
    done,
  };
  return obj;
};

export default Todo;
