import Icon from './images/github-mark-white.png';
import Todo from './generateTodo';
import Project from './generateProject';
import storage from './storage';

const domManipulator = (() => {
  const convertTime = (time) => {
    const dateTime = new Date(time);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    const formattedDateTime = dateTime.toLocaleString('en-US', options);
    return formattedDateTime;
  };

  const displayTodo = (element, projectName) => {
    const projectpane = document.getElementById('projectpane');
    // projectpane.replaceChildren();
    const container = Object.assign(document.createElement('div'), {
      classList: 'todocontainer',
    });

    const header = Object.assign(document.createElement('h1'), {
      textContent: element.title,
      classList: 'todoheading',
    });

    const descriptionDueDateWrapper = Object.assign(
      document.createElement('div'),
      { classList: 'descduewrapper' }
    );
    const description = Object.assign(document.createElement('p'), {
      textContent: element.description,
      classList: 'description',
    });

    const duedate = Object.assign(document.createElement('p'), {
      textContent: `Due: ${convertTime(element.duedate)}`,
      classList: 'duedate',
    });
    descriptionDueDateWrapper.append(description, duedate);

    const priorityWrapper = Object.assign(document.createElement('div'), {
      classList: 'prioritywrapper',
    });
    const priorityLabel = Object.assign(document.createElement('span'), {
      textContent: `Priority:`,
    });
    const priority = Object.assign(document.createElement('span'), {
      classList: `priority ${element.priority}`,
      textContent: `${element.priority}`,
    });
    priority.addEventListener('click', () => {
      const newPriority = storage.changePriority(
        element.title,
        element.project
      );
      priority.textContent = `${newPriority}`;
      priority.classList = `priority ${newPriority}`;
      updateList();
    });
    priorityWrapper.append(priorityLabel, priority);

    const statusButtonsWrapper = Object.assign(document.createElement('div'), {
      classList: 'statusbuttonswrapper',
    });
    const status = Object.assign(document.createElement('span'), {
      textContent: `Status: ${
        element.done === false ? 'Incomplete' : 'Complete'
      }`,
    });

    const buttonsWrapper = Object.assign(document.createElement('div'), {
      classList: 'buttonswrapper',
    });
    const deleteButton = Object.assign(document.createElement('button'), {
      value: element.title,
      title: 'Delete',
      project: projectName,
    });
    const deleteSVG = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );
    deleteSVG.setAttribute('viewBox', '0 -960 960 960');
    const deleteSVGPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
    deleteSVGPath.setAttribute(
      'd',
      'M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z'
    );
    deleteSVG.append(deleteSVGPath);
    deleteButton.append(deleteSVG);
    deleteButton.addEventListener('click', (e) => {
      console.log('delete event');
      storage.deleteItem(deleteButton.value, deleteButton.project);
      let currentNode = e.target;
      while (currentNode !== null) {
        if (currentNode.classList.contains('todocontainer')) {
          currentNode.remove();
          break;
        }
        currentNode = currentNode.parentNode;
      }
      updateList();
    });

    const markDone = Object.assign(document.createElement('button'), {
      value: element.title,
      title: 'Mark Complete/Incomplete',
      classList: `${element.done ? 'complete' : 'incomplete'}`,
    });
    const markDoneSVG = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );
    markDoneSVG.setAttribute('viewBox', '0 0 24 24');
    const markDoneSVGPathComplete =
      'M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7M7.5,13.5L9,12L11,14L15.5,9.5L17,11L11,17L7.5,13.5Z';
    const markDoneSVGPathIncomplete =
      'M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M19 19H5V5H7V7H17V5H19V19M15.54 10.88L13.41 13L15.54 15.12L14.12 16.54L12 14.41L9.88 16.54L8.47 15.12L10.59 13L8.47 10.88L9.88 9.47L12 11.59L14.12 9.47L15.54 10.88Z';
    const markDoneSVGPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
    markDoneSVGPath.setAttribute('d', markDoneSVGPathIncomplete);
    markDoneSVG.append(markDoneSVGPath);
    markDone.append(markDoneSVG);
    markDone.addEventListener('click', () => {
      const newStatus = `${
        storage.markDone(markDone.value, element.project) === true
          ? 'Complete'
          : 'Incomplete'
      }`;
      status.textContent = `Status: ${newStatus}`;
      markDone.classList = newStatus.toLowerCase();
      markDoneSVGPath.setAttribute(
        'd',
        `${
          newStatus === 'Complete'
            ? markDoneSVGPathComplete
            : markDoneSVGPathIncomplete
        }`
      );
      updateList();
      console.log('done status event');
    });

    buttonsWrapper.append(markDone, deleteButton);
    statusButtonsWrapper.append(status, buttonsWrapper);
    container.append(
      header,
      descriptionDueDateWrapper,
      priorityWrapper,
      statusButtonsWrapper
    );
    projectpane.append(container);
  };

  const displayProject = (element) => {
    const projectpane = document.getElementById('projectpane');
    projectpane.replaceChildren();
    const container = Object.assign(document.createElement('div'), {
      id: 'projectcontainer',
    });

    const header = Object.assign(document.createElement('h1'), {
      textContent: element.title,
      classList: 'pheading',
    });
    const description = Object.assign(document.createElement('p'), {
      textContent: element.description,
      classList: 'pdescription',
    });
    const headerDescriptionWrapper = Object.assign(
      document.createElement('div'),
      { id: 'pheaderdescwrapper' }
    );
    headerDescriptionWrapper.append(header, description);
    const duedate = Object.assign(document.createElement('p'), {
      textContent: `Due: ${convertTime(element.duedate)}`,
      classList: 'pduedate',
    });
    const priorityWrapper = Object.assign(document.createElement('div'), {
      classList: 'pprioritywrapper',
    });
    const priorityLabel = Object.assign(document.createElement('span'), {
      textContent: `Priority:`,
    });
    const priority = Object.assign(document.createElement('span'), {
      classList: `priority ${element.priority}`,
      textContent: `${element.priority}`,
    });
    priority.addEventListener('click', () => {
      const newPriority = storage.changePriority(
        element.title,
        element.project
      );
      priority.textContent = `${newPriority}`;
      priority.classList = `priority ${newPriority}`;
      updateList();
    });
    const createSubtodoButton = Object.assign(
      document.createElement('button'),
      {
        id: 'createsubtodobutton',
        innerText: '+',
        classList: 'createbutton',
        name: 'subtodo',
        title: 'Create Todo',
        value: `${element.title}`,
      }
    );
    createSubtodoButton.addEventListener('click', createNew);
    priorityWrapper.append(priorityLabel, priority, createSubtodoButton);

    const statusButtonsWrapper = Object.assign(document.createElement('div'), {
      classList: 'statusbuttonswrapper',
    });
    const status = Object.assign(document.createElement('span'), {
      textContent: `Status: ${
        element.done === false ? 'Incomplete' : 'Complete'
      }`,
    });

    const buttonsWrapper = Object.assign(document.createElement('div'), {
      classList: 'buttonswrapper',
    });
    const deleteButton = Object.assign(document.createElement('button'), {
      value: element.title,
      title: 'Delete',
    });
    const deleteSVG = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );
    deleteSVG.setAttribute('viewBox', '0 -960 960 960');
    const deleteSVGPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
    deleteSVGPath.setAttribute(
      'd',
      'M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z'
    );
    deleteSVG.append(deleteSVGPath);
    deleteButton.append(deleteSVG);
    deleteButton.addEventListener('click', () => {
      console.log('delete event');
      storage.deleteItem(deleteButton.value, element.project);
      updateList();
    });

    const markDone = Object.assign(document.createElement('button'), {
      value: element.title,
      title: 'Mark Complete/Incomplete',
      classList: `${element.done ? 'complete' : 'incomplete'}`,
    });
    const markDoneSVG = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );
    markDoneSVG.setAttribute('viewBox', '0 0 24 24');
    const markDoneSVGPathComplete =
      'M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7M7.5,13.5L9,12L11,14L15.5,9.5L17,11L11,17L7.5,13.5Z';
    const markDoneSVGPathIncomplete =
      'M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M19 19H5V5H7V7H17V5H19V19M15.54 10.88L13.41 13L15.54 15.12L14.12 16.54L12 14.41L9.88 16.54L8.47 15.12L10.59 13L8.47 10.88L9.88 9.47L12 11.59L14.12 9.47L15.54 10.88Z';
    const markDoneSVGPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
    markDoneSVGPath.setAttribute('d', markDoneSVGPathIncomplete);
    markDoneSVG.append(markDoneSVGPath);
    markDone.append(markDoneSVG);
    markDone.addEventListener('click', () => {
      const newStatus = `${
        storage.markDone(markDone.value, element.project) === true
          ? 'Complete'
          : 'Incomplete'
      }`;
      status.textContent = `Status: ${newStatus}`;
      markDone.classList = newStatus.toLowerCase();
      markDoneSVGPath.setAttribute(
        'd',
        `${
          newStatus === 'Complete'
            ? markDoneSVGPathComplete
            : markDoneSVGPathIncomplete
        }`
      );
      updateList();
      console.log('done status event');
    });

    buttonsWrapper.append(markDone, deleteButton);
    statusButtonsWrapper.append(status, buttonsWrapper);
    const duedatePriorityButtonsWrapper = Object.assign(
      document.createElement('div'),
      {
        id: 'duedateprioritybuttonswrapper',
      }
    );
    duedatePriorityButtonsWrapper.append(
      duedate,
      priorityWrapper,
      buttonsWrapper
    );
    container.append(headerDescriptionWrapper, duedatePriorityButtonsWrapper);
    projectpane.append(container);
    const projectList = storage.getProjects();
    const { todos } = projectList.find((e) => e.title === element.title);
    todos.forEach((e) => {
      displayTodo(e, element.title);
    });
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
      if (type === 'todo') {
        displayTodo(element);
      } else if (type === 'project') {
        displayProject(element);
      }
    });
    const tabHeader = Object.assign(document.createElement('span'), {
      textContent: element.title,
    });
    tab.append(tabHeader);
    list.append(tab);
  };

  const updateList = () => {
    // const todoList = document.getElementById('todolist');
    const projectList = document.getElementById('projectlist');
    // todoList.replaceChildren();
    projectList.replaceChildren();
    // const todos = storage.getTodos();
    const projects = storage.getProjects();
    // todos.forEach((element) => createTab(element, 'todo'));
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
      textContent: `Create a New ${type === 'projects' ? 'Project' : 'Todo'}`,
      style: 'margin-top: 0;',
    });
    const createProjectForm = Object.assign(document.createElement('form'), {
      id: `createform`,
      classList: 'createformblocker',
    });

    const titleFieldWrapper = document.createElement('div');
    const titleFieldLabel = Object.assign(document.createElement('label'), {
      for: `${type}name`,
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
        for: `${type}description`,
        textContent: 'Description',
      }
    );
    const descriptionFieldInput = Object.assign(
      document.createElement('input'),
      {
        id: `${type}description`,
        name: 'description',
        required: true,
        maxLength: `${type === 'project' ? '40' : '280'}`,
        type: 'text',
      }
    );
    descriptionFieldWrapper.append(
      descriptionFieldLabel,
      descriptionFieldInput
    );

    const duedateFieldWrapper = document.createElement('div');
    const duedateFieldLabel = Object.assign(document.createElement('label'), {
      for: `${type}duedate`,
      textContent: 'Due Date',
    });
    const duedateFieldInput = Object.assign(document.createElement('input'), {
      id: `${type}duedate`,
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
        id: `${type}prioritylow`,
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
        for: `${type}prioritynormal`,
        textContent: 'Normal',
      }
    );
    const priorityFieldInputNormal = Object.assign(
      document.createElement('input'),
      {
        id: `${type}prioritynormal`,
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
        for: `${type}priorityhigh`,
        textContent: 'High',
      }
    );
    const priorityFieldInputHigh = Object.assign(
      document.createElement('input'),
      {
        id: `${type}priorityhigh`,
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

    const hiddenTypeValue = Object.assign(document.createElement('input'), {
      id: 'type',
      name: 'type',
      type: 'hidden',
      value: `${type}`,
    });

    let subtodoHiddenValue;
    if (type === 'subtodo') {
      subtodoHiddenValue = Object.assign(document.createElement('input'), {
        id: 'subtodohiddenvalue',
        name: 'projectname',
        type: 'hidden',
        value: `${e.target.value}`,
      });
    }

    createProjectForm.append(
      titleFieldWrapper,
      descriptionFieldWrapper,
      duedateFieldWrapper,
      priorityFieldWrapper,
      hiddenTypeValue,
      subtodoHiddenValue,
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

    createProjectForm.addEventListener('submit', submitData);
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log('refresh blocked');
    const submission = new FormData(e.target);
    const type = submission.get('type');
    const title = submission.get('title');
    const projectName = submission.get('projectname');
    if (storage.checkDuplicate(title, type, projectName)) {
      alert(`${type} names must not be identical.`);
      return;
    }
    const description = submission.get('description');
    const duedate = submission.get('duedate');
    if (new Date().getTime() > new Date(duedate).getTime()) {
      alert('Due date cannot be in the past.');
      return;
    }
    const priority = submission.get('priority');
    const subtodo = submission.get('subtodo');
    const item =
      type === 'projects'
        ? Project(title, description, duedate, priority)
        : Todo(title, description, duedate, priority, subtodo);
    console.log(item);
    if (type === 'subtodo') {
      storage.addSubtodo(item, projectName);
      const projectList = storage.getProjects();
      const { todos } = projectList.find((e1) => e1.title === projectName);
      const childTodos = document.getElementsByClassName('todocontainer');
      childTodos.remove();
      todos.forEach((e2) => {
        displayTodo(e2);
      });
    } else {
      storage.addItem(item, type);
    }
    updateList();
    const box = document.getElementById('createblocker');
    box.remove();
  };

  const pageLoad = () => {
    const content = document.getElementById('content');
    const sidebar = Object.assign(document.createElement('div'), {
      id: 'sidebar',
    });

    // const todoListWrapper = Object.assign(document.createElement('div'), {
    //   id: 'todolistwrapper',
    // });
    // const todoListHeaderWrapper = Object.assign(document.createElement('div'), {
    //   id: 'todolistheaderwrapper',
    //   classList: 'listwrapper',
    // });
    // const todosHeader = Object.assign(document.createElement('h2'), {
    //   id: 'todosheader',
    //   classList: 'header',
    //   textContent: 'Todos',
    // });
    // const todoList = Object.assign(document.createElement('div'), {
    //   id: 'todolist',
    // });
    // const createTodoButton = Object.assign(document.createElement('button'), {
    //   id: 'createtodobutton',
    //   innerText: '+',
    //   classList: 'createbutton',
    //   name: 'todo',
    //   title: 'Create Todo',
    // });
    // createTodoButton.addEventListener('click', createNew);
    // todoListHeaderWrapper.append(todosHeader, createTodoButton);
    // todoListWrapper.append(todoListHeaderWrapper, todoList);

    // const searchbarForm = Object.assign(document.createElement('form'), {
    //   id: 'searchbarform',
    // });
    // const searchbar = Object.assign(document.createElement('input'), {
    //   id: 'searchbar',
    //   placeholder: '   Search Projects',
    //   ariaLabel: 'Search Query',
    // });
    // searchbarForm.appendChild(searchbar);

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
        name: 'project',
        title: 'Create Project',
      }
    );
    const projectList = Object.assign(document.createElement('div'), {
      id: 'projectlist',
    });
    createProjectButton.addEventListener('click', createNew);
    projectListHeaderWrapper.append(projectListHeading, createProjectButton);
    projectListWrapper.append(
      projectListHeaderWrapper,
      // searchbarForm,
      projectList
    );
    sidebar.append(projectListWrapper);

    const projectPane = Object.assign(document.createElement('div'), {
      id: 'projectpane',
    });

    const mainContentWrapper = Object.assign(document.createElement('div'), {
      id: 'maincontentwrapper',
    });
    mainContentWrapper.append(sidebar, projectPane);

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
