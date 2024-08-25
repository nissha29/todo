const body = document.querySelector('body')
const tasks = document.querySelector('.tasks')
const btn = document.querySelector('.add-task-btn')
const inputTask = document.querySelector('.input-task')

const addTodo = () => {
    const taskText = inputTask.value
    if(taskText.trim() !== ''){
        const outerDiv = document.createElement('div')
        const task = document.createElement('div')
        const inputField = document.createElement('input')
        const editIcon = document.createElement('i')
        const deleteIcon = document.createElement('i')
        const checkIcon = document.createElement('i')
        const taskDone = document.createElement('i')

        task.classList.add('task-field')
        outerDiv.classList.add('flex', 'justify-center', 'items-center','gap-5')

        inputField.type = 'text'
        inputField.readOnly = true
        inputField.id = 'input-field'
        inputField.value = taskText

        editIcon.classList.add('icon', 'fa-regular', 'fa-pen-to-square')
        editIcon.title = 'edit task'
        editIcon.style.fontSize = '20px'; 
        editIcon.onclick = () => {
            inputField.readOnly = false
            editIcon.classList.remove('fa-regular')
            editIcon.classList.add('fa-solid')
        }
        deleteIcon.classList.add('icon', 'fa-regular', 'fa-trash-can')
        deleteIcon.style.fontSize = '20px'; 
        deleteIcon.title = 'delete task'
        deleteIcon.onclick = () => {
            tasks.removeChild(outerDiv)
        }
        checkIcon.classList.add('check', 'fa-regular' , 'fa-circle-check')
        checkIcon.style.fontSize = '20px'
        checkIcon.title = 'mark editing done'
        checkIcon.onclick = () => {
            inputField.readOnly = true
            checkIcon.classList.remove('fa-regular')
            checkIcon.classList.add('fa-solid')
            editIcon.classList.remove('fa-solid')
            editIcon.classList.add('fa-regular')
            setTimeout(() => {
                checkIcon.classList.remove('fa-solid')
                checkIcon.classList.add('fa-regular')
            }, 2000);
        }

        taskDone.classList.add('icon', 'fa-solid' , 'fa-hourglass-end')
        taskDone.style.fontSize = '20px'
        taskDone.title = 'task completed'
        taskDone.onclick = () => {
            inputField.style.textDecoration = 'line-through';
            taskDone.style.color = '#28a745';
            inputField.style.color = '#432440'
            inputField.readOnly = true; 
            editIcon.onclick = null; 
            editIcon.style.opacity = '0.5';
            editIcon.style.cursor = 'not-allowed'; 
            checkIcon.onclick = null; 
            checkIcon.style.opacity = '0.5';
            checkIcon.style.cursor = 'not-allowed'; 
        };

        task.appendChild(inputField)
        task.appendChild(taskDone)
        task.appendChild(editIcon)
        task.appendChild(deleteIcon)
        outerDiv.appendChild(task)
        outerDiv.appendChild(checkIcon)
        tasks.appendChild(outerDiv)

        inputTask.value = ''
    }
    else{
        alert('input field  is empty')
    }
}

btn.addEventListener('click', addTodo)