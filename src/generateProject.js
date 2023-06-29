import gettersAndSetters from './gettersAndSetters';

const Project = (title, description, duedate, priority, id, todos = []) => {
  const obj = Object.assign(Object.create(gettersAndSetters), {
    title,
    description,
    duedate,
    priority,
    todos,
    id,
  });
  return obj;
};

export default Project;
