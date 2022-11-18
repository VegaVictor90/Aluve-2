addEventListener("DOMContentLoaded", () => {
    const menu_oculto = document.querySelector(".menu_oculto")
    if(menu_oculto) {
        menu_oculto.addEventListener("click", () => {
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.toggle("action")
        })
    }
})

addEventListener("DOMContentLoaded", () => {
    const inicio = document.querySelector(".inicio")
    const libros = document.querySelector(".libros")
    const sociales = document.querySelector(".sociales")
    const contacto = document.querySelector(".contacto")
    
    
    if(inicio) {
        inicio.addEventListener("click", () => {
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.toggle("action")
        })
    }    
    if(libros) {
        libros.addEventListener("click", () => {
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.toggle("action")
        })
    }    
    if(sociales) {
        sociales.addEventListener("click", () => {
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.toggle("action")
        })
    }    
    if(contacto) {
        contacto.addEventListener("click", () => {
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.toggle("action")
        })
    }    
        
})

addEventListener("DOMContentLoaded", () => {
    const lineasmenu = document.querySelector(".lineamenu")
    const salir_1 = document.querySelector(".salir_1")
    if(lineasmenu) {
        lineasmenu.addEventListener("click", () => {
            const lineas = document.querySelector(".lineas")
            lineas.classList.toggle("action_2")
        })
    }

    if (salir_1) {
        salir_1.addEventListener("click", () =>{
            const lineas = document.querySelector(".lineas")
            lineas.classList.toggle("action_2")
        })
    }
})
