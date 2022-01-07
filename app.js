const URL = "http://localhost:3000";
const divEntidades = document.getElementById('entidades');

var checks = document.querySelectorAll('.clicked');
btnCorreo = document.getElementById('btnCorreo');


renderEntidades();

divEntidades.addEventListener('click', elegirEntidad);
btnCorreo.addEventListener('click', generarCorreo)

async function elegirEntidad(e) {
    buttonElegido = e.target;

    try {
        let entidades = await buscarEntidades();

        if (e.target.tagName == "BUTTON") {
            buttonElegido.classList.toggle("clicked");
        }
    }
    catch (err) {
        handleErrorResponse(err)
    }
}

async function generarCorreo(e){

   checks.forEach(check=> {console.log(check)})

    

}