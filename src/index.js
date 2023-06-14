import { doc } from 'prettier';
import domManipulator from './domManipulator.js';
import Icon from './images/github-mark-white.png';
import './styles.css';

// sidebar
const content = document.getElementById('content');
const sidebar = document.createElement('div');
const searchbarWrapper = Object.assign(document.createElement('div'), {
  id: 'searchbarwrapper',
});
const projectBtnWrapper = Object.assign(document.createElement('div'), {
  id: 'projectbtnwrapper',
});
const createProjectButton = Object.assign(document.createElement('button'), {
  id: 'createprojectbutton',
  innerText: '+',
});
const deleteProjectButton = Object.assign(document.createElement('button'), {
  id: 'deleteprojectbutton',
  innerText: '-',
});
projectBtnWrapper.append(createProjectButton, deleteProjectButton);
const searchbar = Object.assign(document.createElement('form'), {
  id: 'searchbar',
  placeholder: 'Search Projects',
});
searchbarWrapper.append(searchbar, projectBtnWrapper);
const listOfProjects = Object.assign(document.createElement('div'), {
  id: 'projectlist',
});
sidebar.append(searchbarWrapper, listOfProjects);
content.appendChild(sidebar);

// project view box

const appLogic = () => {
  const index = 0;
  const projectArray = [];
  const createProject = (title, description) => {
    const newProject = new Project(title, description, ++index);
    projectArray.push(newProject);
    domManipulator.update();
  };
  const markComplete = () => {};
  const changePriority = () => {};
};
