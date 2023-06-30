const Project = (
  title,
  description,
  duedate,
  priority,
  todos = [],
  done = false,
  project = true
) => {
  const obj = {
    title,
    description,
    duedate,
    priority,
    todos,
    project,
    done,
  };
  return obj;
};

export default Project;
