const URL = "http://localhost:3000";
const divEntidades = document.getElementById('entidades');
let entidadesSeleccionadas = new Set()
btnCorreo = document.getElementById('btnCorreo');
const containerMail = document.getElementById('container-mail')
const correo = document.getElementById('correo')
const btnClean = document.getElementById('btnLimpiar')
const btnCopy = document.getElementById('btnCopiar')
let btnSeleccionados = []

renderEntidades();

divEntidades.addEventListener('click', elegirEntidad);
btnCorreo.addEventListener('click', generarCorreo);
btnClean.addEventListener('click', limpiarSeleccion)

btnCopy.addEventListener('click', e=>{
    navigator.clipboard.writeText(containerMail.innerText);
    alert("Copiado exitosamente!")
})

function elegirEntidad(e) {
    buttonElegido = e.target;

    try {
        if (e.target.tagName == "BUTTON") {
            buttonElegido.classList.toggle("clicked");
            btnSeleccionados.push(buttonElegido)
        }
    }
    catch (err) {
        handleErrorResponse(err)
    }
}

async function generarCorreo(e) {

    entidadesSeleccionadas = [...document.querySelectorAll('.clicked')].map(i => i.innerHTML)
    let arr = [...entidadesSeleccionadas]

    let entidades = await buscarEntidades();

    containerMail.classList.remove('hidden')
    btnCopy.classList.remove('hidden')

    arr.map(e => {
        entidades.map(en => {
            if (e == en.entidad) {
                let p = document.createElement('p')
                p.innerText = en.entidad + ' ' + en.nombre;
                p.classList.add('correo');
                correo.appendChild(p)
            }
        })
    })
}

function limpiarSeleccion(e){
    console.log(btnSeleccionados)
    btnSeleccionados.map(btn => btn.classList.remove('clicked'))
    entidadesSeleccionadas = []
}