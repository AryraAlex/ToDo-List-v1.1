import { SELECTORS, CLASSES } from '../const.js'
import { EmptyList } from './task-list-empty.js'
import { updatePagination } from './pagination.js'

export function initTaskButtons() {
  SELECTORS.taskList.addEventListener('click', (event) => {
    clickTaskButtons(event)
  })
}

function clickTaskButtons(event) {
  const parentNode = event.target.closest('.list__item')

  if (event.target.dataset.action === 'done') {
    const taskText = parentNode.querySelector('.list__item-name')
    const checkmark = parentNode.querySelector('.checkmark')

    parentNode.classList.toggle(CLASSES.completed)
    taskText.classList.toggle('done')
    checkmark.classList.toggle(CLASSES.visuallyHidden)
  } else if (event.target.dataset.action === 'delete') {
    parentNode.remove()
    EmptyList()
    updatePagination()
  }
}
