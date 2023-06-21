import Icon from './images/github-mark-white.png';

const domManipulator = (() => {
  const createNewProject = () => {
    console.log('create project');
    const createProjectBlocker = Object.assign(document.createElement('div'), {
      id: 'createprojectblocker',
      classList: 'blocker',
    });

    const createProjectBox = Object.assign(document.createElement('div'), {
      id: 'createprojectbox',
    });

    const createProjectHeading = Object.assign(document.createElement('h1'), {
      textContent: 'Create a New Project',
    });

    const createProjectForm = Object.assign(document.createElement('form'), {
      id: 'createprojectform',
    });

    const nameFieldWrapper = document.createElement('div');
    const nameFieldLabel = Object.assign(document.createElement('label'), {
      for: 'projectname',
      textContent: 'Project Name',
    });
    const nameFieldInput = Object.assign(document.createElement('input'), {
      id: 'projectname',
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
        for: 'projectdescription',
        textContent: 'Description',
      }
    );
    const descriptionFieldInput = Object.assign(
      document.createElement('input'),
      {
        id: 'projectdescription',
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
      for: 'projectduedate',
      textContent: 'Due Date',
    });
    const duedateFieldInput = Object.assign(document.createElement('input'), {
      id: 'projectduedate',
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
        for: 'projectprioritylow',
        textContent: 'Low',
      }
    );
    const priorityFieldInputLow = Object.assign(
      document.createElement('input'),
      {
        id: 'projectprioritylow',
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
        for: 'projectprioritynormal',
        textContent: 'Normal',
      }
    );
    const priorityFieldInputNormal = Object.assign(
      document.createElement('input'),
      {
        id: 'projectprioritynormal',
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
        for: 'projectpriorityhigh',
        textContent: 'High',
      }
    );
    const priorityFieldInputHigh = Object.assign(
      document.createElement('input'),
      {
        id: 'projectpriorityhigh',
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

    createProjectForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('refresh blocked');
      const content = document.getElementById('content');
      const child = document.getElementById('createprojectblocker');
      content.removeChild(child);
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
    createProjectBox.addEventListener('click', (e) => {
      e.stopPropagation();
    });
    createProjectBlocker.addEventListener('click', () => {
      const content = document.getElementById('content');
      const child = document.getElementById('createprojectblocker');
      content.removeChild(child);
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
    const searchbarWrapper = Object.assign(document.createElement('div'), {
      id: 'searchbarwrapper',
    });
    const searchHeading = Object.assign(document.createElement('h2'), {
      textContent: 'Search',
    });
    searchbarWrapper.appendChild(searchHeading);
    const projectBtnWrapper = Object.assign(document.createElement('div'), {
      id: 'projectbtnwrapper',
    });
    const createProjectButton = Object.assign(
      document.createElement('button'),
      {
        id: 'createprojectbutton',
        innerText: '+',
      }
    );
    createProjectButton.addEventListener('click', createNewProject);
    const deleteProjectButton = Object.assign(
      document.createElement('button'),
      {
        id: 'deleteprojectbutton',
        innerText: '-',
      }
    );
    projectBtnWrapper.append(createProjectButton, deleteProjectButton);
    const searchbarForm = Object.assign(document.createElement('form'), {
      id: 'searchbarform',
    });
    const searchbar = Object.assign(document.createElement('input'), {
      id: 'searchbar',
      placeholder: 'Search Projects',
      ariaLabel: 'Search Query',
    });
    searchbarForm.appendChild(searchbar);
    searchbarWrapper.append(searchbarForm, projectBtnWrapper);
    const listOfProjects = Object.assign(document.createElement('div'), {
      id: 'projectlist',
    });
    const projectListHeading = Object.assign(document.createElement('h2'), {
      textContent: 'Projects',
    });
    listOfProjects.appendChild(projectListHeading);
    sidebar.append(searchbarWrapper, listOfProjects);

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
