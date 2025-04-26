import { SELECTORS, CLASSES } from '../const.js'

export function createTaskElements(task) {
  const taskTextContent = SELECTORS.inputArea.value.trim()
  if (taskTextContent === '') {
    return
  }

  // Элемент li
  const newTask = document.createElement('li')
  newTask.className = CLASSES.task

  // Текст задачи
  const taskText = document.createElement('span')
  taskText.className = CLASSES.taskSpan
  taskText.textContent = taskTextContent

  // Кнопка завершения задачи
  const completeTaskButton = document.createElement('button')
  completeTaskButton.className = CLASSES.completeTaskButton
  completeTaskButton.type = 'button'
  completeTaskButton.setAttribute('data-action', 'done')
  completeTaskButton.title = 'Завершить задачу'
  completeTaskButton.ariaLabel = 'Завершить задачу'

  // Иконка галочки
  const checkmarkCompleted = document.createElement('img')
  checkmarkCompleted.className = CLASSES.checkmarkCompleted
  checkmarkCompleted.src = './assets/svg/checkmark.svg'
  checkmarkCompleted.alt = 'complete task'
  checkmarkCompleted.width = '28'
  checkmarkCompleted.height = '28'
  completeTaskButton.appendChild(checkmarkCompleted) // icon checkmark

  // Кнопка редактирования
  const editTaskButton = document.createElement('button')
  editTaskButton.className = CLASSES.TaskButton
  editTaskButton.type = 'button'
  editTaskButton.dataset.action = 'edit'
  editTaskButton.title = 'Редактировать задачу'
  editTaskButton.ariaLabel = 'Редактировать задачу'

  const saveEditButton = document.createElement('button')
  saveEditButton.className = 'input-area__save-button button'
  saveEditButton.type = 'button'
  saveEditButton.innerText = 'Done'

  editTaskButton.addEventListener('click', () => {
    const editTaskInput = document.createElement('input')
    editTaskInput.className =
      'input-area__edit-task input-section'
    editTaskInput.type = 'text'
    editTaskInput.name = 'editTask'
    editTaskInput.value = taskText.textContent
    newTask.replaceChild(editTaskInput, taskText)

    completeTaskButton.style.display = 'none'
    editTaskButton.style.display = 'none'
    deleteTaskButton.style.display = 'none'

    saveEditButton.addEventListener('click', () => {
      const updateTaskText = editTaskInput.value.trim()
      taskText.textContent = updateTaskText
      newTask.replaceChild(taskText, editTaskInput)
      newTask.removeChild(saveEditButton)

      completeTaskButton.style.display = 'flex'
      editTaskButton.style.display = 'flex'
      deleteTaskButton.style.display = 'flex'
    })
    newTask.appendChild(saveEditButton)
    editTaskInput.focus()
  })

  // Иконка редактирования задач
  const iconEditTaskButton = document.createElement('img')
  iconEditTaskButton.className = CLASSES.iconTaskButtons
  iconEditTaskButton.src = './assets/svg/edit-task-icon.svg'
  iconEditTaskButton.alt = 'ícon edit task'
  iconEditTaskButton.width = '41'
  iconEditTaskButton.height = '41'

  editTaskButton.appendChild(iconEditTaskButton) // icon edit task

  // Кнопка удаления
  const deleteTaskButton = document.createElement('button')
  deleteTaskButton.className = CLASSES.TaskButton
  deleteTaskButton.type = 'button'
  deleteTaskButton.dataset.action = 'delete'
  deleteTaskButton.title = 'Удалить задачу'
  deleteTaskButton.ariaLabel = 'Удалить задачу'

  // Иконка мусорного бака
  const trashBinIcon = document.createElement('img')
  trashBinIcon.className = CLASSES.iconTaskButtons
  trashBinIcon.src = './assets/svg/trash-bin.svg'
  trashBinIcon.alt = 'trash bin'
  trashBinIcon.width = '39'
  trashBinIcon.height = '39'

  deleteTaskButton.appendChild(trashBinIcon) // icon trash bin

  // Дата и время
  const createDate = new Date()
  const taskCreationDate = document.createElement('span')
  taskCreationDate.className = 'task-date'
  taskCreationDate.textContent = createDate.toLocaleDateString()
  taskCreationDate.dataset.deadline = 'deadline'
  taskCreationDate.addEventListener('click', () =>
    openDeadLinePicker()
  )

  function openDeadLinePicker() {
    if (document.querySelector('.deadline__picker')) {
      return
    }
    const deadLinePicker = document.createElement('div')
    deadLinePicker.className = 'deadline__picker'

    const deadLineInput = document.createElement('input')
    deadLineInput.type = 'datetime-local'
    deadLineInput.min = new Date().toISOString().slice(0, 16)

    const saveDeadLineButton = document.createElement('button')
    saveDeadLineButton.type = 'button'
    saveDeadLineButton.className = 'deadline-button button'
    saveDeadLineButton.textContent = 'Save'
    saveDeadLineButton.addEventListener('click', () => {
      clickButtonSaveDeadLine(
        taskCreationDate,
        deadLineInput,
        saveDeadLineButton
      ),
        deadLinePicker.remove()
    })

    const closeDeadLineButton = document.createElement('button')
    closeDeadLineButton.type = 'button'
    closeDeadLineButton.className = 'deadline-button button'
    closeDeadLineButton.textContent = 'Close'
    closeDeadLineButton.addEventListener('click', () => {
      deadLinePicker.remove()
    })

    deadLinePicker.append(
      document.createTextNode('Set deadline: '),
      deadLineInput,
      saveDeadLineButton,
      closeDeadLineButton
    )

    document.body.appendChild(deadLinePicker)
  }

  function clickButtonSaveDeadLine(
    taskCreationDate,
    deadLineInput,
  ) {
    const deadLine = new Date(deadLineInput.value)
    if (deadLineInput.value === '') {
      return
    }
    
    taskCreationDate.textContent = `Deadline: ${deadLine.toLocaleDateString()}`
  }

  newTask.append(
    taskText,
    completeTaskButton,
    editTaskButton,
    deleteTaskButton,
    taskCreationDate
  )

  // SELECTORS.taskList.appendChild(newTask) // li

  // Новые задачи в начало списка
  SELECTORS.taskList.insertBefore(
    newTask,
    SELECTORS.taskList.firstChild
  )
}
