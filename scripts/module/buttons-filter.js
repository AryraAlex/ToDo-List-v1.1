import { SELECTORS, CLASSES } from '../const.js'
// import { EmptyList } from './task-list-empty.js'

export function initFilters() {
  SELECTORS.filterButtons.forEach((filter) => {
    filter.addEventListener('click', (event) => {
      removeActiveClass()
      event.target.classList.add(CLASSES.filterActive)

      const tasks = Array.from(SELECTORS.taskList.children)

      if (event.target.dataset.action === 'all') {
        tasks.forEach((task) => {
          task.classList.remove(CLASSES.visuallyHidden)
        })
      } else if (event.target.dataset.action === 'active') {
        tasks.forEach((task) => {
          if (task.classList.contains(CLASSES.completed)) {
            task.classList.add(CLASSES.visuallyHidden)
          } else {
            task.classList.remove(CLASSES.visuallyHidden)
          }
        })
      } else if (event.target.dataset.action === 'completed') {
        tasks.forEach((task) => {
          if (task.classList.contains(CLASSES.completed)) {
            task.classList.remove(CLASSES.visuallyHidden)
          } else {
            task.classList.add(CLASSES.visuallyHidden)
          }
        })
      }
    })
  })
}

function removeActiveClass() {
  SELECTORS.filterButtons.forEach((filter) => {
    filter.classList.remove(CLASSES.filterActive)
  })
}
