import { SELECTORS, CLASSES } from '../const.js'
// import { EmptyList } from './task-list-empty.js'

export function initFilters() {
  SELECTORS.filterButtons.forEach((filter) => {
    filter.addEventListener('click', (event) => {
      removeActiveClass();
      event.target.classList.add(CLASSES.filterActive);
  
      const tasks = Array.from(SELECTORS.taskList.children);
  
      switch (event.target.dataset.action) {
        case 'all':
          tasks.forEach(task => task.classList.remove(CLASSES.visuallyHidden));
          break;
        case 'active':
          tasks.forEach(task => {
            task.classList.toggle(CLASSES.visuallyHidden, 
              task.classList.contains(CLASSES.completed));
          });
          break;
        case 'completed':
          tasks.forEach(task => {
            task.classList.toggle(CLASSES.visuallyHidden, 
              !task.classList.contains(CLASSES.completed));
          });
          break;
      }
    });
  });
}

function removeActiveClass() {
  SELECTORS.filterButtons.forEach(filter => {filter.classList.remove(CLASSES.filterActive)})
}