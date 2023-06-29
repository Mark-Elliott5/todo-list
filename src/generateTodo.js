import gettersAndSetters from './gettersAndSetters';

const Todo = (title, description, duedate, priority, id) => {
  const obj = Object.assign(Object.create(gettersAndSetters), {
    title,
    description,
    duedate,
    priority,
    id,
  });
  return obj;
};

export default Todo;
