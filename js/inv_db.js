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
    console.log(`Error`,error)}

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


