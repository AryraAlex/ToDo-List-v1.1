import { constants } from '../const.js'
import { hiddenEmptyList } from './task-list-empty.js'

export function initAddNewTask() {
  constants.formInput.addEventListener('submit', addNewTask)
}

function addNewTask(event) {
  // Отмена стандартного поведения браузера при отправлении (submit)
  event.preventDefault()

  // Создание нового элемента в DOM дерево
  const input = constants.inputArea.value // В этой переменной записывается содержимое поля ввода
  // В переменной taskHTML хранится разметка элемента, который и будет генерироваться при добавлении новой задачи
  const taskHTML = `
          <li class="list__item">
            <span class="list__item-name task-item">${input}</span>
            <button
              class="list__button button checkbox"
              type="button"
              data-action="done"
            >
              <img
                class="list__item-icon checkmark visually-hidden"
                src="./assets/svg/checkmark.svg"
                alt="done task"
                title="Задача выполнена"
                aria-label="Задача выполнена"
                width="28"
                height="28"
              />
            </button>
            <button
              class="list__button button"
              type="button"
              data-action="delete"
            >
              <img
                class="list__item-icon"
                src="./assets/svg/trash-bin.svg"
                alt="trash bin"
                title="Удалить задачу"
                aria-label="Удалить задачу"
                width="39"
                height="39"
              />
            </button>
          </li>
  `

  // С помощью этого метода происходит генерация элемента.
  // Первый параметр указывает на позицию генерации, а вторым передается содержимое
  constants.taskList.insertAdjacentHTML('beforeend', taskHTML)

  // Очистка поля ввода и сохранение фокуса на нем
  constants.inputArea.value = ''
  constants.inputArea.focus()

  // Проверка, пустой ли список задач
  hiddenEmptyList()
}
