function init() {
    const addBt = document.querySelector('.addButton')
    addBt.addEventListener('click', () =>  {
        addTask()
    })
    }
    function addTask() {
        const ulELement = document.getElementById('todoList')
        const addLi = document.createElement('li')
        const addItem = document.querySelector('.todoInput').value
        addLi.textContent = addItem
        ulELement.appendChild(addLi)
    }
    init();