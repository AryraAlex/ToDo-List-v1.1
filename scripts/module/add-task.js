import { SELECTORS, CLASSES } from '../const.js'
import { EmptyList } from './task-list-empty.js'
import { updatePagination } from './pagination.js'
import { createTaskElements } from './create-task-elements.js'

export function initAddNewTask() {
  SELECTORS.formInput.addEventListener('submit', addNewTask)
}

function addNewTask(task) {
  task.preventDefault()

  createTaskElements()

  SELECTORS.inputArea.value = ''
  SELECTORS.inputArea.focus()

  updatePagination()

  EmptyList()
}
