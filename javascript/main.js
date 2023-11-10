    // Seleccionar el botón de inicio de sesión
    let loginButton = document.getElementById('loginButton');
  
    // Agregar un evento de clic al botón
    loginButton.addEventListener('click', function () {
      // Crear el formulario
  
      // Crear el contenedor 
      let rowLogin = document.createElement("div");
      rowLogin.classList.add("row justify-content-center")
      
      let colLogin = document.createElement("div");
      colLogin.classList.add("col-md-6")

      let cardLogin = document.createElement("div")
      cardLogin.classList.add("card");

      let cardHeader = document.createElement("div");
      cardHeader.classList.add("card-header");
      cardHeader.textContent = "Iniciar Sesion"
      
      let carBody = document.createElement("div");
      carBody.classList.add("card-body");

      let formLogin = document.createElement("form")

      let formGroupEmail = document.createElement("div")
      formGroupEmail.classList.add("form-group")
      
      let userEmail = document.createElement("p")
      userEmail.textContent = "Correo"

      let inputEmail = document.createElement("input")
      inputEmail.classList.add("form-group")
      inputEmail.type = 'email';
      inputEmail.placeholder = 'Ingresa tu nombre de usuario';
      inputEmail.required = true  

      let formGroupPass = document.createElement("div")
      formGroupPass.classList.add("form-group")

      let userName = document.createElement("p")
      userName.textContent = "Password"
  
      let inputPass = document.createElement("input")
      inputPass.classList.add("form-group")
      inputPass.type = 'password';
      inputPass.placeholder = 'Ingresa tu password';
      inputPass.required = true  
  
      // Crear el botón de enviar
      let btnLogin = document.createElement('button');
      btnLogin.classList.add("btn btn-primary")
      btnLogin.type = 'submit';
      btnLogin.textContent = 'Ingresar';
  
      // Agregar los elementos al formulario
      formGroupPass.append(userName, inputPass)  
      formGroupEmail.append(userEmail, inputEmail)
      formLogin.append(formGroupEmail, formGroupPass, btnLogin)
      carBody.append(formLogin)
      cardLogin.append(cardHeader, carBody)
      colLogin.append(cardLogin)
      rowLogin.append(colLogin)

      return rowLogin
    });
    // Agregar el formulario al cuerpo del documento
    let containerLogin = getElementById("loginWraper")
    containerLogin.append(rowLogin)
