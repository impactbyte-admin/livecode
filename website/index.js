let buttonRegister = $("#button-register")
let buttonLogin = $("#button-login")
let outputText = $("#output-text")

function register() {
  let username = $("#input-username").value
  let password = $("#input-password").value
  printOutput(username, password)
}

function login() {
  let username = $("#input-username").value
  let password = $("#input-password").value
  printOutput(username, password)
}

function printOutput(username, password) {
  const usernamePassword = `${username} & ${password}`

  console.log(usernamePassword);
  alert(usernamePassword)
  outputText.innerHTML = usernamePassword
}

// buttonRegister.addEventListener("click", register)
// buttonLogin.addEventListener("click", login)

buttonRegister.click(function() {
  $("header").animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 5000, function() {
    // Animation complete.
  });
});

buttonLogi.click(function() {
  $("header").animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 5000, function() {
    // Animation complete.
  });
});


