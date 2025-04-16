import { SELECTORS, CLASSES } from '../const.js'
import { items } from '../const.js'

export function initClickIconEmptyList() {
  SELECTORS.iconEmptyList.addEventListener('click', () => {
    SELECTORS.inputArea.focus()
  })
}

export function EmptyList() {
  if (items.length > 1) {
    SELECTORS.emptyList.style.display = 'none'
  } else {
    SELECTORS.emptyList.style.display = 'flex'
  }
}
