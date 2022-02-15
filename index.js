var modal = document.getElementById("Modal")

function login_handler(){
    var username = document.getElementById('UserName').value
    console.log(username)
}

function open_modal(){
    Modal.style.display = 'block'
}

function close_handler(){
    Modal.style.display = 'none'
}