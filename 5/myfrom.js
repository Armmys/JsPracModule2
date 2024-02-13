function init() {
    const reg = document.querySelector('button')
    reg.addEventListener('click', () => {
        showUserRegister()
    })
}
function showUserRegister() {
    const lastDiv = document.querySelectorAll('div')[3]
    const createP = document.createElement('p')
    const addName = document.getElementById('name').value
    const addEmail = document.getElementById('email').value
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    
    lastDiv.appendChild(createP)
    createP.textContent = `Name : ${addName} | Email : ${addEmail}`
    nameInput.value = "";
    emailInput.value = "";
}
init();