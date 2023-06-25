import Icon from './images/github-mark-white.png';

const domManipulator = (() => {
  const createNew = (e) => {
    const text = e.target.name;
    console.log(`create new ${text}`);
    const createProjectBlocker = Object.assign(document.createElement('div'), {
      id: `createblocker`,
      classList: 'blocker',
    });
    const createProjectBox = Object.assign(document.createElement('div'), {
      id: `createbox`,
      classList: 'createbox',
    });
    const createProjectHeading = Object.assign(document.createElement('h1'), {
      textContent: `Create a New ${text}`,
    });
    const createProjectForm = Object.assign(document.createElement('form'), {
      id: `create${text.toLowerCase()}form`,
      classList: 'createformblocker',
    });

    const nameFieldWrapper = document.createElement('div');
    const nameFieldLabel = Object.assign(document.createElement('label'), {
      for: `${text.toLowerCase()}name`,
      textContent: `${text} Name`,
    });
    const nameFieldInput = Object.assign(document.createElement('input'), {
      id: `${text}name`,
      name: 'name',
      required: true,
      maxLength: '40',
      minLength: '5',
      type: 'text',
    });
    nameFieldWrapper.append(nameFieldLabel, nameFieldInput);

    const descriptionFieldWrapper = document.createElement('div');
    const descriptionFieldLabel = Object.assign(
      document.createElement('label'),
      {
        for: `${text.toLowerCase()}description`,
        textContent: 'Description',
      }
    );
    const descriptionFieldInput = Object.assign(
      document.createElement('input'),
      {
        id: `${text}.toLowerCase}description`,
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
      for: `${text.toLowerCase()}duedate`,
      textContent: 'Due Date',
    });
    const duedateFieldInput = Object.assign(document.createElement('input'), {
      id: `${text.toLowerCase()}duedate`,
      name: 'duedate',
      required: true,
      maxLength: '40',
      type: 'date',
    });
    duedateFieldWrapper.append(duedateFieldLabel, duedateFieldInput);

    const priorityFieldWrapper = document.createElement('div');
    const priorityFieldHeading = Object.assign(document.createElement('h1'), {
      textContent: 'Priority',
    });
    const priorityFieldLowWrapper = Object.assign(
      document.createElement('div'),
      {
        classList: 'radiowrapper',
      }
    );
    const priorityFieldLabelLow = Object.assign(
      document.createElement('label'),
      {
        for: `${text.toLowerCase()}prioritylow`,
        textContent: 'Low',
      }
    );
    const priorityFieldInputLow = Object.assign(
      document.createElement('input'),
      {
        id: `${text.toLowerCase()}prioritylow`,
        name: 'priority',
        required: true,
        type: 'radio',
        textContent: 'Low',
        value: 'Low',
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
        for: `${text.toLowerCase()}prioritynormal`,
        textContent: 'Normal',
      }
    );
    const priorityFieldInputNormal = Object.assign(
      document.createElement('input'),
      {
        id: `${text.toLowerCase()}prioritynormal`,
        name: 'priority',
        required: true,
        type: 'radio',
        textContent: 'Normal',
        value: 'Normal',
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
        for: `${text.toLowerCase()}priorityhigh`,
        textContent: 'High',
      }
    );
    const priorityFieldInputHigh = Object.assign(
      document.createElement('input'),
      {
        id: `${text.toLowerCase()}priorityhigh`,
        name: 'priority',
        required: true,
        type: 'radio',
        textContent: 'High',
        value: 'High',
      }
    );
    priorityFieldHighWrapper.append(
      priorityFieldLabelHigh,
      priorityFieldInputHigh
    );
    priorityFieldWrapper.append(
      priorityFieldHeading,
      priorityFieldLowWrapper,
      priorityFieldNormalWrapper,
      priorityFieldHighWrapper
    );

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
      const box = document.getElementById('createblocker');
      box.remove();
    });
    createProjectForm.append(
      nameFieldWrapper,
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

    const tasksList = Object.assign(document.createElement('div'), {
      id: 'taskslist',
    });
    const tasksListHeaderWrapper = Object.assign(
      document.createElement('div'),
      {
        id: 'taskslistheaderwrapper',
        classList: 'listwrapper',
      }
    );
    const tasksHeader = Object.assign(document.createElement('h2'), {
      id: 'tasksheader',
      classList: 'header',
      textContent: 'Tasks',
    });
    const createTaskButton = Object.assign(document.createElement('button'), {
      id: 'createtaskbutton',
      innerText: '+',
      classList: 'createbutton',
      name: 'Task',
    });
    createTaskButton.addEventListener('click', createNew);
    tasksListHeaderWrapper.append(tasksHeader, createTaskButton);
    tasksList.append(tasksListHeaderWrapper);

    const searchbarForm = Object.assign(document.createElement('form'), {
      id: 'searchbarform',
    });
    const searchbar = Object.assign(document.createElement('input'), {
      id: 'searchbar',
      placeholder: '   Search Projects',
      ariaLabel: 'Search Query',
    });
    searchbarForm.appendChild(searchbar);

    const projectList = Object.assign(document.createElement('div'), {
      id: 'projectlist',
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
        name: 'Project',
      }
    );
    createProjectButton.addEventListener('click', createNew);
    projectListHeaderWrapper.append(projectListHeading, createProjectButton);
    projectList.appendChild(projectListHeaderWrapper);

    sidebar.append(tasksList, searchbarForm, projectList);

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
  };

  return { pageLoad };
})();

export default domManipulator;
