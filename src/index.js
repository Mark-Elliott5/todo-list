import domManipulator from './domManipulator';
// import './styles.css';

// const appLogic = () => {
//   let index = 0;
//   const projectArray = [];
//   const createProject = (title, description) => {
//     const newProject = new Project(title, description, (index += 1));
//     projectArray.push(newProject);
//     domManipulator.update();
//   };
//   const markComplete = () => {};
//   const changePriority = () => {};
// };

document.addEventListener('DOMContentLoaded', domManipulator.pageLoad);
