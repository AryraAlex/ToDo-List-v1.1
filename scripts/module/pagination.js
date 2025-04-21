import { SELECTORS, CLASSES } from '../const.js'
import { EmptyList } from './task-list-empty.js'

const state = {
  currentPage: 1,
  totalPages: 1,
  tasksPerPage: 3,
  currentTasks: [],
}

export function initPagination() {
  updatePagination()
  onClickButtonsPagination()
}

export function updatePagination() {
  const tasks = Array.from(SELECTORS.taskList.children).filter(
    (task) => !task.classList.contains(SELECTORS.emptyList)
  )

  state.currentTasks = tasks
  state.totalPages =
    Math.ceil(state.currentTasks.length / state.tasksPerPage) ||
    1

  SELECTORS.paginationNumbersPage.textContent = `Page ${state.currentPage} of ${state.totalPages}`

  disabledButtons()
  showTasksForCurrentPage()
  EmptyList()
}

function onClickButtonsPagination() {
  SELECTORS.paginationButtons.forEach((button) => {
    button.addEventListener('click', (buttonTarget) => {
      buttonTarget.target.dataset.pagination === 'prev'
        ? --state.currentPage
        : ++state.currentPage
      updatePagination()
    })
  })
}

function disabledButtons() {
  SELECTORS.prevButtonPag.disabled = state.currentPage === 1
  SELECTORS.nextButtonPag.disabled =
    state.currentPage === state.totalPages
}

function showTasksForCurrentPage() {
  state.currentTasks.forEach(
    (task) => (task.style.display = 'none')
  )

  const start = (state.currentPage - 1) * state.tasksPerPage
  const end = start + state.tasksPerPage
  const showTasks = state.currentTasks.slice(start, end)

  if (showTasks.length === 0 && state.currentPage > 1) {
    --state.currentPage
    updatePagination()
    return
  }

  if (state.currentTasks.length === 0) {
    EmptyList()
    return
  }

  showTasks.forEach((task) => {
    task.style.display = ''
  })
}

export function addTaskWithPagination(newTaskElement) {
  SELECTORS.taskList.appendChild(newTaskElement)

  if (state.currentTasks.length % state.tasksPerPage === 0) {
    state.currentPage = Math.ceil(
      state.currentTasks.length / state.tasksPerPage
    )
  }

  updatePagination()
}
