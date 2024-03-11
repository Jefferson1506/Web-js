class Usuario {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  }

  class ValidadorUsuarios {
   static  usuarios = [
      new Usuario("adm", "adm"),
      new Usuario("user", "user123")
    ];

   

   static  validar(username, password) {
      return this.usuarios.some(usuario => 
        usuario.username === username && usuario.password === password
      );
    }
  }


  function validarUsuario() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (ValidadorUsuarios.validar(username, password)) {
      alert("¡Inicio de sesión exitoso!");
      window.location.href = "html/calculadora.html";

      return false;
    } else {
      alert("Usuario o contraseña incorrectos");
      return false; 
    }
  }