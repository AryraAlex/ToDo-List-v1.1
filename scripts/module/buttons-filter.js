import { constants } from '../const.js'
import { hiddenEmptyList } from './task-list-empty.js'

export function initFilters() {
  constants.filterButtons.forEach((filter) => {
    filter.addEventListener('click', (event) => {
      constants.filterButtons.forEach((btn) => {
        btn.classList.remove('filter-area__button--active')
      })
      event.target.classList.add('filter-area__button--active')

      if (event.target.dataset.action === 'all') {
        taskItemVisible()
      } else if (event.target.dataset.action === 'active') {
        taskItemActiveVisible()
      } else if (event.target.dataset.action === 'completed') {
        taskItemHidden()
      }
    })
  })
}

function taskItemVisible() {
  const tasks = Array.from(constants.taskList.children)
  tasks.forEach((task) => {
    task.classList.remove('visually-hidden')
  })
  hiddenEmptyList()
}

function taskItemActiveVisible() {
  const tasks = Array.from(constants.taskList.children)
  tasks.forEach((task) => {
    if (task.classList.contains('done')) {
      task.classList.add('visually-hidden')
    } else {
      task.classList.remove('visually-hidden')
    }
  })
  hiddenEmptyList()
}

function taskItemHidden() {
  const tasks = Array.from(constants.taskList.children)
  tasks.forEach((task) => {
    if (task.classList.contains('done')) {
      task.classList.remove('visually-hidden')
    } else {
      task.classList.add('visually-hidden')
    }
  })
  hiddenEmptyList()
}
