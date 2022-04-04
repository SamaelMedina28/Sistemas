
let add = document.getElementById("add") 
let description = document.getElementById("description")
let date = document.getElementById("date")
let time = document.getElementById("time")
let box = document.getElementById("box")


const indexedDb = window.indexedDB
let db
const peticion = indexedDb.open(`actividades`,1)
peticion.onsuccess=()=>{
    db=peticion.result
    console.log(`OPEN`,db)
    readData()
}
peticion.onupgradeneeded=()=>{
    db=peticion.result
    const objectStore=db.createObjectStore(`ListaActividades`,{
        autoIncrement: true
    })
    console.log(`CREATE`,db)
}

// * Leer datos de usuario
const readData=()=>{
    const transaction=db.transaction([`ListaActividades`],`readonly`)
    const objectStore=transaction.objectStore(`ListaActividades`)
    const request=objectStore.openCursor()
    request.onsuccess = (e)=>{
        const cursor=e.target.result
        if(cursor){
            console.log(cursor.value)  
            let des = document.createElement("textarea")
            des.classList.add("info_class")
            des.setAttribute("disabled","")
            let fecha =  document.createElement("div")
            let hora =  document.createElement("div")

            fecha.textContent =  cursor.value.fecha
            hora.textContent =  cursor.value.hora
            des.textContent = cursor.value.descripcion
            
            box.appendChild(des)
            box.appendChild(fecha)
            box.appendChild(hora)

            cursor.continue()
            
        }else{
            console.log("No more data")
        }
    }
}

add.addEventListener("click",()=>{
    let actividad={
        descripcion:description.value,
        fecha:date.value,
        hora:time.value
    }
    const transaction=db.transaction([`ListaActividades`],`readwrite`)
    const objectStore=transaction.objectStore(`ListaActividades`)
    const request=objectStore.add(actividad)
    location.reload()
})

peticion.onerror=()=>{
    console.log(`Error`,error)}