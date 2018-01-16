let buttonRegister = document.querySelector("#button-register")
let buttonLogin = document.querySelector("#button-login")
let outputText = document.querySelector("#output-text")

function register() {
  let username = document.querySelector("#input-username").value
  let password = document.querySelector("#input-password").value
  printOutput(username, password)
}

function login() {
  let username = document.querySelector("#input-username").value
  let password = document.querySelector("#input-password").value
  printOutput(username, password)
}

function printOutput(username, password) {
  const usernamePassword = `${username} & ${password}`

  console.log(usernamePassword);
  alert(usernamePassword)
  outputText.innerHTML = usernamePassword
}

buttonRegister.addEventListener("click", register)
buttonLogin.addEventListener("click", login)
