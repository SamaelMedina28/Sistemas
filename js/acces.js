const user = document.getElementById("user")
const password = document.getElementById("password")
const verificar = document.getElementById("verificar")
const entrar =  document.getElementById("entrar")

verificar.addEventListener("click", ()=>{
    if(user.value == "SamaelMedina" && password.value == "2832882812"){
        entrar.classList.add("verifyOn")
        entrar.href="pages/actividades.html"

    }else{
        Swal.fire(
            'Usuario o contraseña incorrecto',
            'Intentalo de nuevo',
            'error'
          )
    }
})

