const gettersAndSetters = {
  setTitle(input) {
    this.name = input;
  },
  setDescription(input) {
    this.description = input;
  },
  setDueDate(input) {
    this.duedate = input;
  },
  setPriority(input) {
    this.priority = input;
  },
  getTitle() {
    return this.title;
  },
  getDescription() {
    return this.description;
  },
  getDueDate() {
    return this.duedate;
  },
  getPriority() {
    return this.priority;
  },
  getID() {
    return this.id;
  },
  getTodos() {
    return this.todos;
  },
};

export default gettersAndSetters;
