export const SELECTORS = {
  formInput: document.querySelector('.input-area__form'),
  inputArea: document.querySelector('.input-area__task'),
  inputButton: document.querySelector('input-area__button'),

  taskList: document.querySelector('.list'),
  tasks: document.querySelectorAll('.list__item'),

  emptyList: document.querySelector('.task-area__task-empty'),

  iconEmptyList: document.querySelector('.task-area__icon-button'),
  filterButtons: document.querySelectorAll('.filter-area__button'),

  changeThemeButton: document.querySelector('.theme-toggle'),

  prevButtonPag: document.getElementById('prev-page'),
  nextButtonPag: document.getElementById('next-page'),
  paginationButtons: document.querySelectorAll('.pagination-area__button'),
  numberPagPage: document.querySelector('.pagination-area__info'),
  paginationNumbersPage: document.querySelector('.pagination-area__info'),
}

export const CLASSES = {
  task: 'list__item',
  taskSpan: 'list__item-name task-item',

  completeTaskButton: 'list__button button checkbox',
  checkmarkCompleted: 'list__item-icon checkmark visually-hidden',
  TaskButton: 'list__button button',
  iconTaskButtons: 'list__item-icon',
  filterActive: 'filter-area__button--active',

  completed: 'comleted',
  visuallyHidden: 'visually-hidden',
}
