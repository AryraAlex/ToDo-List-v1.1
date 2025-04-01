import { constants } from '../const.js'
import { hiddenEmptyList } from './task-list-empty.js'

export function initDeleteTask() {
  constants.taskList.addEventListener('click', (event) => {
    if (event.target.dataset.action === 'delete') {
      const parentNode = event.target.closest('.list__item')
      parentNode.remove()

      hiddenEmptyList()
    }
  })
}
