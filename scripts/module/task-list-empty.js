import { SELECTORS, CLASSES } from '../const.js'


export function initClickIconEmptyList() {
  SELECTORS.iconEmptyList.addEventListener('click', () => {
    SELECTORS.inputArea.focus()
  })
}

export function EmptyList() {
  if (SELECTORS.taskList.children.length > 1) {
    SELECTORS.emptyList.style.display = 'none'
  } else if (SELECTORS.taskList.children.length === 1) {
    SELECTORS.emptyList.style.display = 'flex'
  }
}