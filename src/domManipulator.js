import Icon from './images/github-mark-white.png';
import Todo from './generateTodo';
import Project from './generateProject';
import storage from './storage';

const domManipulator = (() => {
  const displayTodo = (element) => {
    const projectpane = document.getElementById('projectpane');
    projectpane.replaceChildren();
    const container = document.createElement('div');
    const header = Object.assign(document.createElement('h1'), {
      textContent: element.title,
    });
    const description = Object.assign(document.createElement('p'), {
      textContent: element.description,
    });
    const duedate = Object.assign(document.createElement('span'), {
      textContent: element.duedate,
    });
    const priority = Object.assign(document.createElement('h1'), {
      textContent: element.priority,
    });
    const status = Object.assign(document.createElement('span'), {
      textContent: `${element.done === false ? 'Unfinished' : 'Finished'}`,
    });
    const deleteButton = Object.assign(document.createElement('button'), {
      textContent: 'Delete',
      value: element.title,
    });
    deleteButton.addEventListener('click', () => {
      console.log('delete event');
      storage.deleteItem(deleteButton.value, element.project);
      projectpane.replaceChildren();
      updateList();
    });
    const markDone = Object.assign(document.createElement('button'), {
      textContent: 'Mark Finished',
      value: element.title,
    });
    markDone.addEventListener('click', () => {
      storage.markDone(markDone.value, element.project);
      updateList();
      console.log('done status event');
    });
    container.append(
      header,
      description,
      duedate,
      priority,
      status,
      markDone,
      deleteButton
    );
    projectpane.append(container);
  };

  const createTab = (element, type) => {
    const list =
      type === 'project'
        ? document.getElementById('projectlist')
        : document.getElementById('todolist');
    const tab = Object.assign(document.createElement('div'), {
      classList: `tab ${element.priority} ${
        element.done === true ? 'done' : ''
      }`,
    });
    tab.addEventListener('click', () => {
      displayTodo(element);
    });
    const tabHeader = Object.assign(document.createElement('h3'), {
      textContent: element.title,
    });
    tab.append(tabHeader);
    list.append(tab);
  };

  const updateList = () => {
    const todoList = document.getElementById('todolist');
    const projectList = document.getElementById('projectlist');
    todoList.replaceChildren();
    projectList.replaceChildren();
    const todos = storage.getTodos();
    const projects = storage.getProjects();
    todos.forEach((element) => createTab(element, 'todo'));
    projects.forEach((element) => createTab(element, 'project'));
  };

  const createNew = (e) => {
    const type = e.target.name;
    console.log(`create new ${type}`);
    const createProjectBlocker = Object.assign(document.createElement('div'), {
      id: `createblocker`,
      classList: 'blocker',
    });
    const createProjectBox = Object.assign(document.createElement('div'), {
      id: `createbox`,
      classList: 'createbox',
    });
    const createProjectHeading = Object.assign(document.createElement('h1'), {
      textContent: `Create a New ${type}`,
      style: 'margin-top: 0;',
    });
    const createProjectForm = Object.assign(document.createElement('form'), {
      id: `createform`,
      classList: 'createformblocker',
    });

    const titleFieldWrapper = document.createElement('div');
    const titleFieldLabel = Object.assign(document.createElement('label'), {
      for: `${type.toLowerCase()}name`,
      textContent: `${type} Name`,
    });
    const titleFieldInput = Object.assign(document.createElement('input'), {
      id: `${type}title`,
      name: 'title',
      required: true,
      maxLength: '40',
      minLength: '5',
      type: 'text',
    });
    titleFieldWrapper.append(titleFieldLabel, titleFieldInput);

    const descriptionFieldWrapper = document.createElement('div');
    const descriptionFieldLabel = Object.assign(
      document.createElement('label'),
      {
        for: `${type.toLowerCase()}description`,
        textContent: 'Description',
      }
    );
    const descriptionFieldInput = Object.assign(
      document.createElement('input'),
      {
        id: `${type.toLowerCase()}description`,
        name: 'description',
        required: true,
        maxLength: '40',
        type: 'text',
      }
    );
    descriptionFieldWrapper.append(
      descriptionFieldLabel,
      descriptionFieldInput
    );

    const duedateFieldWrapper = document.createElement('div');
    const duedateFieldLabel = Object.assign(document.createElement('label'), {
      for: `${type.toLowerCase()}duedate`,
      textContent: 'Due Date',
    });
    const duedateFieldInput = Object.assign(document.createElement('input'), {
      id: `${type.toLowerCase()}duedate`,
      name: 'duedate',
      required: true,
      type: 'datetime-local',
    });
    duedateFieldWrapper.append(duedateFieldLabel, duedateFieldInput);

    const priorityFieldWrapper = document.createElement('div');
    const priorityFieldHeading = Object.assign(document.createElement('h1'), {
      textContent: 'Priority',
    });
    const priorityFieldFlexWrapper = Object.assign(
      document.createElement('div'),
      {
        classList: 'priorityfieldflexwrapper',
      }
    );
    const priorityFieldLowWrapper = Object.assign(
      document.createElement('div'),
      {
        classList: 'radiowrapper',
      }
    );
    const priorityFieldLabelLow = Object.assign(
      document.createElement('label'),
      {
        for: `${type.toLowerCase()}prioritylow`,
        textContent: 'Low',
      }
    );
    const priorityFieldInputLow = Object.assign(
      document.createElement('input'),
      {
        id: `${type.toLowerCase()}prioritylow`,
        name: 'priority',
        required: true,
        type: 'radio',
        textContent: 'Low',
        value: 'low',
      }
    );
    priorityFieldLowWrapper.append(
      priorityFieldLabelLow,
      priorityFieldInputLow
    );
    const priorityFieldNormalWrapper = Object.assign(
      document.createElement('div'),
      {
        classList: 'radiowrapper',
      }
    );
    const priorityFieldLabelNormal = Object.assign(
      document.createElement('label'),
      {
        for: `${type.toLowerCase()}prioritynormal`,
        textContent: 'Normal',
      }
    );
    const priorityFieldInputNormal = Object.assign(
      document.createElement('input'),
      {
        id: `${type.toLowerCase()}prioritynormal`,
        name: 'priority',
        required: true,
        type: 'radio',
        textContent: 'Normal',
        value: 'normal',
      }
    );
    priorityFieldNormalWrapper.append(
      priorityFieldLabelNormal,
      priorityFieldInputNormal
    );
    const priorityFieldHighWrapper = Object.assign(
      document.createElement('div'),
      {
        classList: 'radiowrapper',
      }
    );
    const priorityFieldLabelHigh = Object.assign(
      document.createElement('label'),
      {
        for: `${type.toLowerCase()}priorityhigh`,
        textContent: 'High',
      }
    );
    const priorityFieldInputHigh = Object.assign(
      document.createElement('input'),
      {
        id: `${type.toLowerCase()}priorityhigh`,
        name: 'priority',
        required: true,
        type: 'radio',
        textContent: 'High',
        value: 'high',
      }
    );
    priorityFieldHighWrapper.append(
      priorityFieldLabelHigh,
      priorityFieldInputHigh
    );
    priorityFieldFlexWrapper.append(
      priorityFieldLowWrapper,
      priorityFieldNormalWrapper,
      priorityFieldHighWrapper
    );
    priorityFieldWrapper.append(priorityFieldHeading, priorityFieldFlexWrapper);

    const submitNewProjectWrapper = document.createElement('div');
    const submitNewProjectButton = Object.assign(
      document.createElement('button'),
      {
        type: 'submit',
        id: 'submitnewproject',
        classList: 'submitbutton',
        textContent: 'Create',
      }
    );
    submitNewProjectWrapper.append(submitNewProjectButton);

    createProjectForm.addEventListener('submit', (e1) => {
      e1.preventDefault();
      console.log('refresh blocked');
      const submission = new FormData(e1.target);
      const title = submission.get('title');
      if (storage.checkDuplicate(title, type)) {
        alert(`${type} names must not be identical.`);
        return;
      }
      const description = submission.get('description');
      const duedate = submission.get('duedate');
      const priority = submission.get('priority');
      const item =
        type === 'projects'
          ? Project(title, description, duedate, priority)
          : Todo(title, description, duedate, priority);
      console.log(item);
      storage.addItem(item, type);
      updateList();
      const box = document.getElementById('createblocker');
      box.remove();
    });

    createProjectForm.append(
      titleFieldWrapper,
      descriptionFieldWrapper,
      duedateFieldWrapper,
      priorityFieldWrapper,
      submitNewProjectWrapper
    );

    createProjectBox.append(createProjectHeading, createProjectForm);
    createProjectBlocker.append(createProjectBox);
    createProjectBox.addEventListener('click', (e2) => {
      e2.stopPropagation();
    });
    createProjectBlocker.addEventListener('click', () => {
      const blocker = document.getElementById(`createblocker`);
      blocker.remove();
    });
    const content = document.getElementById('content');
    content.append(createProjectBlocker);
  };

  const pageLoad = () => {
    // sidebar
    const content = document.getElementById('content');
    const sidebar = Object.assign(document.createElement('div'), {
      id: 'sidebar',
    });

    const todoListWrapper = Object.assign(document.createElement('div'), {
      id: 'todolistwrapper',
    });
    const todoListHeaderWrapper = Object.assign(document.createElement('div'), {
      id: 'todolistheaderwrapper',
      classList: 'listwrapper',
    });
    const todosHeader = Object.assign(document.createElement('h2'), {
      id: 'todosheader',
      classList: 'header',
      textContent: 'Todos',
    });
    const todoList = Object.assign(document.createElement('div'), {
      id: 'todolist',
    });
    const createTodoButton = Object.assign(document.createElement('button'), {
      id: 'createtodobutton',
      innerText: '+',
      classList: 'createbutton',
      name: 'todos',
    });
    createTodoButton.addEventListener('click', createNew);
    todoListHeaderWrapper.append(todosHeader, createTodoButton);
    todoListWrapper.append(todoListHeaderWrapper, todoList);

    const searchbarForm = Object.assign(document.createElement('form'), {
      id: 'searchbarform',
    });
    const searchbar = Object.assign(document.createElement('input'), {
      id: 'searchbar',
      placeholder: '   Search Projects',
      ariaLabel: 'Search Query',
    });
    searchbarForm.appendChild(searchbar);

    const projectListWrapper = Object.assign(document.createElement('div'), {
      id: 'projectlistwrapper',
    });
    const projectListHeaderWrapper = Object.assign(
      document.createElement('div'),
      {
        id: 'projectlistheaderwrapper',
        classList: 'listwrapper',
      }
    );
    const projectListHeading = Object.assign(document.createElement('h2'), {
      textContent: 'Projects',
      classList: 'header',
    });
    const createProjectButton = Object.assign(
      document.createElement('button'),
      {
        id: 'createprojectbutton',
        innerText: '+',
        classList: 'createbutton',
        name: 'projects',
      }
    );
    const projectList = Object.assign(document.createElement('div'), {
      id: 'projectlist',
    });
    createProjectButton.addEventListener('click', createNew);
    projectListHeaderWrapper.append(projectListHeading, createProjectButton);
    projectListWrapper.append(
      projectListHeaderWrapper,
      searchbarForm,
      projectList
    );

    sidebar.append(todoListWrapper, projectListWrapper);

    // project pane
    const projectPane = Object.assign(document.createElement('div'), {
      id: 'projectpane',
    });

    // main content wrapper
    const mainContentWrapper = Object.assign(document.createElement('div'), {
      id: 'maincontentwrapper',
    });
    mainContentWrapper.append(sidebar, projectPane);

    // header and footer
    const header = Object.assign(document.createElement('header'), {
      textContent: 'Todo List',
    });

    const footer = document.createElement('footer');
    const githubLink = Object.assign(document.createElement('a'), {
      innerText: 'Designed by Mark Elliott',
      href: 'https://github.com/Mark-Elliott5',
    });
    const githubIcon = Object.assign(new Image(), {
      src: Icon,
      classList: 'github-link',
    });
    githubLink.appendChild(githubIcon);
    footer.appendChild(githubLink);

    content.append(header, mainContentWrapper, footer);
    updateList();
  };

  return { pageLoad };
})();

export default domManipulator;
