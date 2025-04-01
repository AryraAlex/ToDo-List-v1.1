import { constants } from '../const.js'

export function initCompletedTask() {
  constants.taskList.addEventListener('click', (event) => {
    if (event.target.dataset.action === 'done') {
      const parentNode = event.target.closest('.list__item')
      const checkBox = parentNode.querySelector('.checkbox')
      const checkMark = checkBox.querySelector('.checkmark')

      parentNode.classList.toggle('done')
      checkMark.classList.toggle('visually-hidden')
    }
  })
}
