const divEntidades = document.getElementById('entidades');
let entidadesSeleccionadas = new Set()
btnCorreo = document.getElementById('btnCorreo');
const containerMail = document.getElementById('container-mail')
const correo = document.getElementById('correo')
const btnClean = document.getElementById('btnLimpiar')
const btnCopy = document.getElementById('btnCopiar')
let btnSeleccionados = []
let arr = [];
let p;
let entidades = [
    { entidad: "007", nombre: "Nombre de Entidad" },
    { entidad: "011", nombre: "Nombre de Entidad" },
    { entidad: "014", nombre: "Nombre de Entidad" },
    { entidad: "015", nombre: "Nombre de Entidad" },
    { entidad: "016", nombre: "Nombre de Entidad" },
    { entidad: "017", nombre: "Nombre de Entidad" },
    { entidad: "018", nombre: "Nombre de Entidad" },
    { entidad: "020", nombre: "Nombre de Entidad" },
    { entidad: "027", nombre: "Nombre de Entidad" },
    { entidad: "029", nombre: "Nombre de Entidad" },
    { entidad: "030", nombre: "Nombre de Entidad" },
    { entidad: "034", nombre: "Nombre de Entidad" },
    { entidad: "044", nombre: "Nombre de Entidad" },
    { entidad: "045", nombre: "Nombre de Entidad" },
    { entidad: "060", nombre: "Nombre de Entidad" },
    { entidad: "065", nombre: "Nombre de Entidad" },
    { entidad: "072", nombre: "Nombre de Entidad" },
    { entidad: "083", nombre: "Nombre de Entidad" },
    { entidad: "086", nombre: "Nombre de Entidad" },
    { entidad: "093", nombre: "Nombre de Entidad" },
    { entidad: "094", nombre: "Nombre de Entidad" },
    { entidad: "097", nombre: "Nombre de Entidad" },
    { entidad: "147", nombre: "Nombre de Entidad" },
    { entidad: "150", nombre: "Nombre de Entidad" },
    { entidad: "191", nombre: "Nombre de Entidad" },
    { entidad: "198", nombre: "Nombre de Entidad" },
    { entidad: "247", nombre: "Nombre de Entidad" },
    { entidad: "254", nombre: "Nombre de Entidad" },
    { entidad: "259", nombre: "Nombre de Entidad" },
    { entidad: "268", nombre: "Nombre de Entidad" },
    { entidad: "269", nombre: "Nombre de Entidad" },
    { entidad: "277", nombre: "Nombre de Entidad" },
    { entidad: "281", nombre: "Nombre de Entidad" },
    { entidad: "285", nombre: "Nombre de Entidad" },
    { entidad: "297", nombre: "Nombre de Entidad" },
    { entidad: "299", nombre: "Nombre de Entidad" },
    { entidad: "301", nombre: "Nombre de Entidad" },
    { entidad: "303", nombre: "Nombre de Entidad" },
    { entidad: "305", nombre: "Nombre de Entidad" },
    { entidad: "309", nombre: "Nombre de Entidad" },
    { entidad: "310", nombre: "Nombre de Entidad" },
    { entidad: "311", nombre: "Nombre de Entidad" },
    { entidad: "312", nombre: "Nombre de Entidad" },
    { entidad: "315", nombre: "Nombre de Entidad" },
    { entidad: "319", nombre: "Nombre de Entidad" },
    { entidad: "321", nombre: "Nombre de Entidad" },
    { entidad: "322", nombre: "Nombre de Entidad" },
    { entidad: "325", nombre: "Nombre de Entidad" },
    { entidad: "330", nombre: "Nombre de Entidad" },
    { entidad: "336", nombre: "Nombre de Entidad" },
    { entidad: "338", nombre: "Nombre de Entidad" },
    { entidad: "341", nombre: "Nombre de Entidad" },
    { entidad: "386", nombre: "Nombre de Entidad" },
    { entidad: "389", nombre: "Nombre de Entidad" },
    { entidad: "406", nombre: "Nombre de Entidad" },
    { entidad: "408", nombre: "Nombre de Entidad" },
    { entidad: "415", nombre: "Nombre de Entidad" },
    { entidad: "426", nombre: "Nombre de Entidad" },
    { entidad: "431", nombre: "Nombre de Entidad" },
    { entidad: "432", nombre: "Nombre de Entidad" },
    { entidad: "434", nombre: "Nombre de Entidad" },
    { entidad: "435", nombre: "Nombre de Entidad" },
    { entidad: "440", nombre: "Nombre de Entidad" },
    { entidad: "442", nombre: "Nombre de Entidad" },
    { entidad: "448", nombre: "Nombre de Entidad" }
]
  


renderEntidades();

divEntidades.addEventListener('click', elegirEntidad);
btnCorreo.addEventListener('click', generarCorreo);
btnClean.addEventListener('click', limpiarSeleccion)

btnCopy.addEventListener('click', e=>{
    navigator.clipboard.writeText(containerMail.innerText);
    alert("Copiado exitosamente!")
})

function renderEntidades(){
    let contenido = entidades.map (e => `<button>${e.entidad}</button>`).join(''); 
    divEntidades.innerHTML = contenido;
  }

function elegirEntidad(e) {
    buttonElegido = e.target;

    if (e.target.tagName == "BUTTON") {
        buttonElegido.classList.toggle("clicked");
        btnSeleccionados.push(buttonElegido)
    }
}

function generarCorreo(e) {

    arr = []
    correo.innerHTML = ''
    entidadesSeleccionadas = [...document.querySelectorAll('.clicked')].map(i => i.innerHTML)
    arr = [...entidadesSeleccionadas]

    containerMail.classList.remove('hidden')
    btnCopy.classList.remove('hidden')

    arr.map(e => {
        entidades.map(en => {
            if (e == en.entidad) {
                p = document.createElement('p')
                p.innerText = en.entidad + ' ' + en.nombre;
                p.classList.add('correo');
                correo.appendChild(p)
            }
        })
    })
}

function limpiarSeleccion(e){
    btnSeleccionados.map(btn => btn.classList.remove('clicked'))
    entidadesSeleccionadas = []
    correo.innerHTML = ''
    arr = []
}