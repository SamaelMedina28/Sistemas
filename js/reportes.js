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
        for (const key in elements) {
            elements[key].classList.toggle("hidden")
        }
    more.setAttribute(src,"../sources/chevron-up-arrow.svg")
})