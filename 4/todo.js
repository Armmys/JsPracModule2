function init() {
    const addBt = document.querySelector('button')
    addBt.addEventListener('click', () =>  {
        const ulELement = document.getElementById('todoList')
        const addItem = document.querySelector('input').value
        const addLi = document.createElement('li')
        const Clearinput = document.querySelector('input')
        addLi.textContent = addItem
        ulELement.appendChild(addLi)
        
        Clearinput.value = ''
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