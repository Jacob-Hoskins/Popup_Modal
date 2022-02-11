var modal = document.getElementById('Modal')
var openModal = document.getElementById('ModalHandler')

function login_handler(){
    var username = document.getElementById('UserName').value
    console.log(username)
}

function create_account(){
    console.log("Account created")
}

function create_account_handler(){
    Modal.style.display = 'block'
}

function create_account_close(){
    Modal.style.display = 'none'
}