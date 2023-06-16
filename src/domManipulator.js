import Icon from './images/github-mark-white.png';

const domManipulator = (() => {
  const pageLoad = () => {
    // sidebar
    const content = document.getElementById('content');
    const sidebar = Object.assign(document.createElement('div'), {
      id: 'sidebar',
    });
    const searchbarWrapper = Object.assign(document.createElement('div'), {
      id: 'searchbarwrapper',
    });
    const searchHeading = Object.assign(document.createElement('h1'), {
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
    const projectListHeading = Object.assign(document.createElement('h1'), {
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

    const footer = document.createElement('footer');
    const githubLink = Object.assign(document.createElement('a'), {
      innerText: 'Designed by Mark Elliott',
      href: 'https://github.com/Mark-Elliott5',
    });
    const githubIcon = new Image();
    githubIcon.src = Icon;
    githubIcon.classList.add('github-link');
    githubLink.appendChild(githubIcon);
    footer.appendChild(githubLink);

    content.append(mainContentWrapper, footer);
  };

  return { pageLoad };
})();

export default domManipulator;
