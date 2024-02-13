function init() {
    const addBt = document.getElementById('addButton')
    addBt.addEventListener('click', () =>  {
        addTask()
    })
    }
    function addTask() {
        const ulELement = document.getElementById('todoList')
        const addLi = document.createElement('li')
        const addItem = document.getElementById('todoInput').value
        addLi.textContent = addItem
        ulELement.appendChild(addLi)
    }
    init();