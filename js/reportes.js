const activos = document.getElementById("activo")
const terminados = document.getElementById("terminados")
const activos_box = document.getElementById("activos_box")
const terminados_box = document.getElementById("terminados_box")

const elements = document.getElementsByClassName("select")

activos.addEventListener("click", ()=>{
    activos.classList.add("whatching")
    terminados.classList.remove("whatching")

    activos_box.classList.remove("hidden")
    terminados_box.classList.add("hidden")
})

terminados.addEventListener("click", ()=>{
    terminados.classList.add("whatching")
    activos.classList.remove("whatching")

    terminados_box.classList.remove("hidden")
    activos_box.classList.add("hidden")
})


const more = document.getElementById("more")
    more.addEventListener("click", ()=>{
        if (more.textContent=="Ver mas") {
            more.textContent="Ver menos"

        } else {
            more.textContent="Ver mas"
        }
        
        for (const key in elements) {
            elements[key].classList.toggle("hidden")
        }

})

// * Inicio de base de datos y funcionalidad

let time = document.getElementById("time") 
let description = document.getElementById("description")
let add = document.getElementById("add")
let info_add = document.getElementById("info_add")


const indexedDb = window.indexedDB
let db
const peticion = indexedDb.open(`reportes`,1)
peticion.onsuccess=()=>{
    db=peticion.result
    console.log(`OPEN`,db)
    readData()
}
peticion.onupgradeneeded=()=>{
    db=peticion.result
    const objectStore=db.createObjectStore(`ListaReportes`,{
        autoIncrement: true
    })
    console.log(`CREATE`,db)
}

// * Leer datos de usuario
const readData=()=>{
    const transaction=db.transaction([`ListaReportes`],`readonly`)
    const objectStore=transaction.objectStore(`ListaReportes`)
    const request=objectStore.openCursor()
    request.onsuccess = (e)=>{
        const cursor=e.target.result
        if(cursor){
            console.log(cursor.value)  
            
            const element_description = document.createElement("li")
            const element_time = document.createElement("li")

            element_description.textContent = cursor.value.descripcion
            element_time.textContent =  cursor.value.hora

            info_add.appendChild(element_description)
            info_add.appendChild(element_time)
            element_description.classList.add("selected")
            element_time.classList.add("selected")
            cursor.continue()
            
        }else{
            console.log("No more data")
        }
    }
}

add.addEventListener("click",()=>{
    let reporte={
        descripcion:description.value,
        hora:time.value
    }
    const transaction=db.transaction([`ListaReportes`],`readwrite`)
    const objectStore=transaction.objectStore(`ListaReportes`)
    const request=objectStore.add(reporte)
    location.reload()
})

peticion.onerror=()=>{
    console.log(`Error`,error)}



    // ! FUNCIONALIDAD DE LA PARTE DE REPORTES TERMIANDOS

const finish =  document.getElementById("finish")


// * BASE DE DATOS DE REPORTES TERMINADOS

