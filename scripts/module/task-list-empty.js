import { constants } from '../const.js'

export function initTaskListEmpty() {
  // Клик по иконки дает фокус на поле ввода
  constants.buttonFocusInput.addEventListener('click', () => {
    constants.inputArea.focus()
  })

  hiddenEmptyList()
}

export function hiddenEmptyList() {
  if (constants.taskList.children.length > 1) {
    constants.emptyList.classList.add('visually-hidden')
  } else {
    constants.emptyList.classList.remove('visually-hidden')
  }
}