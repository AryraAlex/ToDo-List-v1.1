import { items } from '../const.js'
import { updateItemList } from './add-task.js'

export let currentPage = 1
export const itemsPerPage = 3
let totalPages = 1

const paginationPage = document.querySelector(
  '.pagination__page'
)

const paginationButtons = {
  prev: document.querySelector('#pagination-prev'),
  next: document.querySelector('#pagination-next'),
}

function updateCurrentPage(page) {
  currentPage = page
}

function updateTotalPage() {
  totalPages = Math.ceil(items.length / itemsPerPage) || 1
}

function bindEvents() {
  paginationButtons.prev.addEventListener('click', () => {
    const isFirstPage = currentPage === 1

    if (!isFirstPage) {
      updateCurrentPage(currentPage - 1)
      renderPageNumbers(currentPage, totalPages)
      updateItemList()
    }
  })

  paginationButtons.next.addEventListener('click', () => {
    if (currentPage === totalPages) {
      return
    }

    updateCurrentPage(currentPage + 1)
    renderPageNumbers(currentPage, totalPages)
    updateItemList()
  })
}

function renderPageNumbers(currentPage, totalPages) {
  paginationPage.textContent = `${currentPage} / ${totalPages}`
}

export function updatePagination() {
  updateTotalPage()
  renderPageNumbers(currentPage, totalPages)
}

export function initPagination() {
  bindEvents()
  updatePagination()
}
