let buttonRegister = $("#button-register")
let buttonLogin = $("#button-login")
let outputText = $("#output-text")

function register() {
  let username = $("#input-username").val()
  let password = $("#input-password").val()
  printOutput(username, password)
}

function login() {
  let username = $("#input-username").val()
  let password = $("#input-password").val()
  printOutput(username, password)
}

function printOutput(username, password) {
  const usernamePassword = `${username} & ${password}`

  console.log(usernamePassword);
  outputText.html(usernamePassword)
}

buttonRegister.click(function() {
  register()
});

buttonLogin.click(function() {
  login()
});
