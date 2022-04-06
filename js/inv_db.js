let add = document.getElementById("add") 
let box = document.getElementById("box")

let identify =  document.getElementById("identify")
let year =  document.getElementById("year")
let propietario =  document.getElementById("propietario")
let modelo =  document.getElementById("modelo")
let marca =  document.getElementById("marca")
let estado = document.getElementById("estado")



const indexedDb = window.indexedDB
let db
const peticion = indexedDb.open(`inventario`,1)
peticion.onsuccess=()=>{
    db=peticion.result
    console.log(`OPEN`,db)
    readData()
}
peticion.onupgradeneeded=()=>{
    db=peticion.result
    const objectStore=db.createObjectStore(`ListaEquipos`,{
        autoIncrement: true
    })
    console.log(`CREATE`,db)
}

// * Leer datos de usuario
const readData=()=>{
    const transaction=db.transaction([`ListaEquipos`],`readonly`)
    const objectStore=transaction.objectStore(`ListaEquipos`)
    const request=objectStore.openCursor()
    request.onsuccess = (e)=>{
        const cursor=e.target.result
        if(cursor){
            console.log(cursor.value)  
            let id = document.createElement("div")
            let marca = document.createElement("div")
            let modelo = document.createElement("div")
            let year = document.createElement("div")
            let propietario = document.createElement("div")
            let estado = document.createElement("div")

            id.textContent =  cursor.value.add_id
            marca.textContent =  cursor.value.add_marca
            modelo.textContent =  cursor.value.add_modelo
            year.textContent =  cursor.value.add_year
            propietario.textContent =  cursor.value.add_propietario
            estado.textContent =  cursor.value.add_estado
            switch (cursor.value.add_estado) {
                case "En uso":
                    estado.classList.add("enable")
                    break;
                case "Disponible":
                    estado.classList.add("used")
                    break;
                default:
                    estado.classList.add("inactive")
                    break;
            }
            box.appendChild(id)
            box.appendChild(marca)
            box.appendChild(modelo)
            box.appendChild(year)
            box.appendChild(propietario)
            box.appendChild(estado)
            cursor.continue()
        }else{
            console.log("No more data")
        }
    }
}

add.addEventListener("click",()=>{
    let equipo = {
        add_id:identify.value,
        add_marca:marca.value,
        add_modelo:modelo.value,
        add_year:year.value,
        add_propietario:propietario.value,
        add_estado:estado.value,
    }
    const transaction=db.transaction([`ListaEquipos`],`readwrite`)
    const objectStore=transaction.objectStore(`ListaEquipos`)
    const request=objectStore.add(equipo)
    location.reload()
})

peticion.onerror=()=>{
    console.log(`Error`,error)
}




// & Batery´s Database
let add_bat = document.getElementById("add_batery") 
let box_bat = document.getElementById("box_bateria")

let identify_bat =  document.getElementById("identify_bateria")
let propietario_bat =  document.getElementById("propietario_bateria")
let marca_bat =  document.getElementById("marca_bateria")
let estado_bat = document.getElementById("estado_bateria")



const indexedDb_bat = window.indexedDB
let db_bat
const peticion_bat = indexedDb_bat.open(`inventario_bat`,1)
peticion_bat.onsuccess=()=>{
    db_bat=peticion_bat.result
    console.log(`OPEN`,db)
    readData_bat()
}
peticion_bat.onupgradeneeded=()=>{
    db_bat=peticion_bat.result
    const objectStore_bat=db_bat.createObjectStore(`ListaBaterias`,{
        autoIncrement: true
    })
    console.log(`CREATE`,db)
}

// * Leer datos de usuario
const readData_bat=()=>{
    const transaction_bat=db_bat.transaction([`ListaBaterias`],`readonly`)
    const objectStore_bat=transaction_bat.objectStore(`ListaBaterias`)
    const request_bat=objectStore_bat.openCursor()
    request_bat.onsuccess = (e)=>{
        const cursor_bat=e.target.result
        if(cursor_bat){
            console.log(cursor_bat.value)  
            let id_bat = document.createElement("div")
            let marca_bat = document.createElement("div")
            let propietario_bat = document.createElement("div")
            let estado_bat = document.createElement("div")

            id_bat.textContent =  cursor_bat.value.add_id
            marca_bat.textContent =  cursor_bat.value.add_marca
            propietario_bat.textContent =  cursor_bat.value.add_propietario
            estado_bat.textContent =  cursor_bat.value.add_estado
            switch (cursor_bat.value.add_estado) {
                case "En uso":
                    estado_bat.classList.add("enable")
                    break;
                case "Disponible":
                    estado_bat.classList.add("used")
                    break;
                default:
                    estado_bat.classList.add("inactive")
                    break;
            }
            box_bat.appendChild(id_bat)
            box_bat.appendChild(marca_bat)
            box_bat.appendChild(propietario_bat)
            box_bat.appendChild(estado_bat)
            cursor_bat.continue()
        }else{
            console.log("No more data")
        }
    }
}

add_batery.addEventListener("click",()=>{
    let bateria = {
        add_id:identify_bat.value,
        add_marca:marca_bat.value,
        add_propietario:propietario_bat.value,
        add_estado:estado_bat.value,
    }
    const transaction_bat=db_bat.transaction([`ListaBaterias`],`readwrite`)
    const objectStore_bat=transaction_bat.objectStore(`ListaBaterias`)
    const request_bat=objectStore_bat.add(bateria)
    location.reload()
})

peticion.onerror=()=>{
    console.log(`Error`,error)}




// & Monitor´s database

let add_mon = document.getElementById("add_monitor") 
let box_mon = document.getElementById("box_monitor")

let identify_mon =  document.getElementById("identify_monitor")
let year_mon =  document.getElementById("year_monitor")
let propietario_mon =  document.getElementById("propietario_monitor")
let modelo_mon =  document.getElementById("modelo_monitor")
let marca_mon =  document.getElementById("marca_monitor")
let estado_mon = document.getElementById("estado_monitor")



const indexedDb_mon = window.indexedDB
let db_mon
const peticion_mon = indexedDb_mon.open(`inventario_mon`,1)
peticion_mon.onsuccess=()=>{
    db_mon=peticion_mon.result
    console.log(`OPEN`,db)
    readData_mon()
}
peticion_mon.onupgradeneeded=()=>{
    db_mon=peticion_mon.result
    const objectStore_mon=db_mon.createObjectStore(`ListaMonitores`,{
        autoIncrement: true
    })
    console.log(`CREATE`,db)
}

// * Leer datos de usuario
const readData_mon=()=>{
    const transaction_mon=db_mon.transaction([`ListaMonitores`],`readonly`)
    const objectStore_mon=transaction_mon.objectStore(`ListaMonitores`)
    const request_mon=objectStore_mon.openCursor()
    request_mon.onsuccess = (e)=>{
        const cursor_mon=e.target.result
        if(cursor_mon){
            console.log(cursor_mon.value)  
            let id_mon = document.createElement("div")
            let marca_mon = document.createElement("div")
            let modelo_mon = document.createElement("div")
            let year_mon = document.createElement("div")
            let propietario_mon = document.createElement("div")
            let estado_mon = document.createElement("div")

            id_mon.textContent =  cursor_mon.value.add_id
            marca_mon.textContent =  cursor_mon.value.add_marca
            modelo_mon.textContent =  cursor_mon.value.add_modelo
            year_mon.textContent =  cursor_mon.value.add_year
            propietario_mon.textContent =  cursor_mon.value.add_propietario
            estado_mon.textContent =  cursor_mon.value.add_estado
            switch (cursor_mon.value.add_estado) {
                case "En uso":
                    estado_mon.classList.add("enable")
                    break;
                case "Disponible":
                    estado_mon.classList.add("used")
                    break;
                default:
                    estado_mon.classList.add("inactive")
                    break;
            }
            box_mon.appendChild(id_mon)
            box_mon.appendChild(marca_mon)
            box_mon.appendChild(modelo_mon)
            box_mon.appendChild(year_mon)
            box_mon.appendChild(propietario_mon)
            box_mon.appendChild(estado_mon)
            cursor_mon.continue()
        }else{
            console.log("No more data")
        }
    }
}

add_mon.addEventListener("click",()=>{
    let monitor = {
        add_id:identify_mon.value,
        add_marca:marca_mon.value,
        add_modelo:modelo_mon.value,
        add_year:year_mon.value,
        add_propietario:propietario_mon.value,
        add_estado:estado_mon.value,
    }
    const transaction_mon=db_mon.transaction([`ListaMonitores`],`readwrite`)
    const objectStore_mon=transaction_mon.objectStore(`ListaMonitores`)
    const request_mon=objectStore_mon.add(monitor)
    location.reload()
})

peticion_mon.onerror=()=>{
    console.log(`Error`,error)
}


// & User´s Database
let add_user = document.getElementById("add_user") 
let box_user = document.getElementById("box_usuario")

let name_user =  document.getElementById("name_user")
let lastname_user =  document.getElementById("lastname_user")
let email_user =  document.getElementById("email_user")
let pass1_user =  document.getElementById("password1_user")
let user_user =  document.getElementById("user_user")
let pass2_user = document.getElementById("password2_user")



const indexedDb_user = window.indexedDB
let db_user
const peticion_user = indexedDb_user.open(`inventario_user`,1)
peticion_user.onsuccess=()=>{
    db_user=peticion_user.result
    console.log(`OPEN`,db)
    readData_user()
}
peticion_user.onupgradeneeded=()=>{
    db_user=peticion_user.result
    const objectStore_user=db_user.createObjectStore(`ListaUsuarios`,{
        autoIncrement: true
    })
    console.log(`CREATE`,db)
}

// * Leer datos de usuario
const readData_user=()=>{
    const transaction_user= db_user.transaction([`ListaUsuarios`],`readonly`)
    const objectStore_user=transaction_user.objectStore(`ListaUsuarios`)
    const request_user=objectStore_user.openCursor()
    request_user.onsuccess = (e)=>{
        const cursor_user=e.target.result
        if(cursor_user){
            console.log(cursor_user.value)  
            let name_ = document.createElement("div")
            let lastname_ = document.createElement("div")
            let email_ = document.createElement("div")
            let pas1_ = document.createElement("div")
            let user_ = document.createElement("div")
            let pas2_ = document.createElement("div")

            name_.textContent = cursor_user.value.name
            lastname_.textContent = cursor_user.value.lastname
            email_.textContent = cursor_user.value.email
            pas1_.textContent = cursor_user.value.password1
            user_.textContent = cursor_user.value.user
            pas2_.textContent = cursor_user.value.password2
            box_user.appendChild(name_)
            box_user.appendChild(lastname_)
            box_user.appendChild(email_)
            box_user.appendChild(pas1_)
            box_user.appendChild(user_)
            box_user.appendChild(pas2_)
            cursor_user.continue()
        }else{
            console.log("No more data")
        }
    }
}

add_user.addEventListener("click",()=>{
    let usuario = {
        name:name_user.value,
        lastname:lastname_user.value,
        email:email_user.value,
        password1:pass1_user.value,
        user:user_user.value,
        password2:pass2_user.value,
    }
    const transaction_user=db_user.transaction([`ListaUsuarios`],`readwrite`)
    const objectStore_user=transaction_user.objectStore(`ListaUsuarios`)
    const request_user=objectStore_user.add(usuario)
    location.reload()
})

peticion_user.onerror=()=>{
    console.log(`Error`,error)
}





    

const baterias = document.getElementById("baterias")
const monitores = document.getElementById("monitores")
const licencias = document.getElementById("licencias")
const historial = document.getElementById("historial")
const equipos = document.getElementById("equipos")

const equipos_box = document.getElementById("equipos_box")
const baterias_box = document.getElementById("baterias_box")
const monitores_box = document.getElementById("monitores_box")
const licencias_box = document.getElementById("licencias_box")
const historial_box = document.getElementById("historial_box")


equipos.addEventListener("click", ()=>{
    monitores.classList.remove("whatching")
    equipos.classList.add("whatching")
    baterias.classList.remove("whatching")
    licencias.classList.remove("whatching")
    historial.classList.remove("whatching")

    equipos_box.classList.remove("hidden")
    baterias_box.classList.add("hidden")
    monitores_box.classList.add("hidden")
    licencias_box.classList.add("hidden")
    historial_box.classList.add("hidden")
})
baterias.addEventListener("click", ()=>{
    baterias.classList.add("whatching")
    equipos.classList.remove("whatching")
    monitores.classList.remove("whatching")
    licencias.classList.remove("whatching")
    historial.classList.remove("whatching")

    equipos_box.classList.add("hidden")
    baterias_box.classList.remove("hidden")
    monitores_box.classList.add("hidden")
    licencias_box.classList.add("hidden")
    historial_box.classList.add("hidden")
})

monitores.addEventListener("click", ()=>{
    monitores.classList.add("whatching")
    equipos.classList.remove("whatching")
    baterias.classList.remove("whatching")
    licencias.classList.remove("whatching")
    historial.classList.remove("whatching")

    equipos_box.classList.add("hidden")
    baterias_box.classList.add("hidden")
    monitores_box.classList.remove("hidden")
    licencias_box.classList.add("hidden")
    historial_box.classList.add("hidden")
})

licencias.addEventListener("click", ()=>{
    monitores.classList.remove("whatching")
    equipos.classList.remove("whatching")
    baterias.classList.remove("whatching")
    licencias.classList.add("whatching")
    historial.classList.remove("whatching")

    equipos_box.classList.add("hidden")
    baterias_box.classList.add("hidden")
    monitores_box.classList.add("hidden")
    licencias_box.classList.remove("hidden")
    historial_box.classList.add("hidden")
})

historial.addEventListener("click", ()=>{
    monitores.classList.remove("whatching")
    equipos.classList.remove("whatching")
    baterias.classList.remove("whatching")
    licencias.classList.remove("whatching")
    historial.classList.add("whatching")

    equipos_box.classList.add("hidden")
    baterias_box.classList.add("hidden")
    monitores_box.classList.add("hidden")
    licencias_box.classList.add("hidden")
    historial_box.classList.remove("hidden")
})