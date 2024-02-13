function init() {
    const addBt = document.querySelector('button')
    addBt.addEventListener('click', () =>  {
        addTask()
    })
    }
    function addTask() {
        const ulELement = document.getElementById('todoList')
        const addLi = document.createElement('li')
        const addItem = document.querySelector('input').value
        const inputField = document.querySelector('input')
        addLi.textContent = addItem
        ulELement.appendChild(addLi)

        inputField.value = "";

    }
    init();