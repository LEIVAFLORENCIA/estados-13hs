const container = document.getElementById("container");
const btnGenerar = document.getElementById("generarCorreo");
const btnCopy = document.getElementById("copy");
const mail = document.getElementById("mail");
const divEntidades = document.querySelector(".correo");
const fragmento = document.createDocumentFragment();
let entidadesOrdenadas;
let buttonElegido;

container.addEventListener("click", elegirEntidad);
btnGenerar.addEventListener("click", mostrarCorreo);
// btnCopy.addEventListener("click", copy);

const entidades = [
    { entidad: 07, nombre: "GALICIA" },
    { entidad: 11, nombre: "BANCO NACION" },
    { entidad: 14, nombre: "PROVINCIA BS AS" },
    { entidad: 15, nombre: "ICBC" },
    { entidad: 16, nombre: "CITIBANK" },
    { entidad: 17, nombre: "BANCO FRANCES" },
    { entidad: 18, nombre: "MUFG Bank, Ltd." },
    { entidad: 20, nombre: "PROV CORDOBA" },
    { entidad: 27, nombre: "SUPERVIELLE" },
    { entidad: 29, nombre: "BANCO CIUDAD" },
    { entidad: 30, nombre: "B.C.R.A." },
    { entidad: 34, nombre: "PATAGONIA SUDAMERIS" },
    { entidad: 44, nombre: "HIPOTECARIO" },
    { entidad: 45, nombre: "DE SAN JUAN" },
    { entidad: 60, nombre: "DEL TUCUMAN" },
    { entidad: 65, nombre: "MUNICIPAL DE ROSARIO" },
    { entidad: 72, nombre: "SANTANDER RIO SA" },
    { entidad: 83, nombre: "DEL CHUBUT" },
    { entidad: 86, nombre: "DE SANTA CRUZ" },
    { entidad: 93, nombre: "DE LA PAMPA" },
    { entidad: 94, nombre: "DE CORRIENTES" },
    { entidad: 97, nombre: "DE NEUQUEN" },
    { entidad: 147, nombre: "BI CREDITANSTALT" },
    { entidad: 150, nombre: "HSBC BANK ARG." },
    { entidad: 191, nombre: "CREDICOOP" },
    { entidad: 198, nombre: "DE VALORES" },
    { entidad: 247, nombre: "ROELA" },
    { entidad: 254, nombre: "MARIVA" },
    { entidad: 259, nombre: "ITAU" },
    { entidad: 268, nombre: "TIERRA DEL FUEGO" },
    { entidad: 269, nombre: "ORIENTAL URUGUAY" },
    { entidad: 277, nombre: "BANCO SAENZ" },
    { entidad: 281, nombre: "PROVIDIAN BANK" },
    { entidad: 285, nombre: "MACRO" },
    { entidad: 440, nombre: "FIAT CREDITO" },
    { entidad: 297, nombre: "EXPRINTER" },
    { entidad: 299, nombre: "COMAFI" },
    { entidad: 301, nombre: "BANCO PIANO" },
    { entidad: 303, nombre: "FINANSUR S.A." },
    { entidad: 305, nombre: "BANCO JULIO SA" },
    { entidad: 432, nombre: "BANCO DE COMERCIO S.A." },
    { entidad: 309, nombre: "DE LA RIOJA" },
    { entidad: 310, nombre: "DEL SOL" },
    { entidad: 311, nombre: "NUEVO DEL CHACO" },
    { entidad: 315, nombre: "DE FORMOSA" },
    { entidad: 319, nombre: "CO METROPOLITANA" },
    { entidad: 321, nombre: "SANTIAGO DEL ESTERO" },
    { entidad: 322, nombre: "INDUSTRIAL AZUL" },
    { entidad: 325, nombre: "BANCO BC SOCIEDAD ANONIMA" },
    { entidad: 330, nombre: "DE SANTA FE" },
    { entidad: 336, nombre: "BRADESCO ARG. S.A." },
    { entidad: 338, nombre: "BCO SERV Y TRANSAC" },
    { entidad: 341, nombre: "BANCO MAS VENTAS" },
    { entidad: 386, nombre: "NUEVO BANCO BERSA" },
    { entidad: 389, nombre: "BANCO COLUMBIA" },
    { entidad: 406, nombre: "METROPOLIS CIA. FIN." },
    { entidad: 408, nombre: "CIA FINANC ARGEN" },
    { entidad: 415, nombre: "TRANSATLANTICA COMPAÑÍA FINANCIERA S.A." },
    { entidad: 434, nombre: "CAJA CRED CUENCA" },
    { entidad: 442, nombre: "DAIMLER CHRYSLER" },
    { entidad: 426, nombre: "BICA" },
    { entidad: 448, nombre: "FINANDINO COMPAÑÍA FINANCIERA S.A." },
    { entidad: 431, nombre: "BANCO COINAG" },
    { entidad: 312, nombre: "VOII" },
    { entidad: 435, nombre: "BANCO SUCREDITO REGIONAL" }
];
let entidadesElegidas = [];

function elegirEntidad(e) {
    buttonElegido = e.target;

    if (e.target.tagName == "BUTTON") {
        buttonElegido.classList.toggle("clicked");

        entidades.forEach(entidad => {
            if (entidad.entidad == buttonElegido.innerText & buttonElegido.classList.contains("clicked")) {
                
                let entidadElegida = ({ entidad: entidad.entidad, nombre: entidad.nombre });
                if (!entidadesElegidas.includes(entidadElegida)) {
                    entidadesElegidas.push(entidadElegida);
                }
            }
        });
    }
}


function mostrarCorreo() {
    console.log
    btnGenerar.classList.add("clickedGreen")
    mail.classList.remove("hidden")
    btnCopy.classList.remove("hidden")
    entidadesOrdenadas = entidadesElegidas.sort((a, b) => a.entidad - b.entidad);
   
    for(let i=0; i<entidadesOrdenadas.length; i++){
        let entidad = entidadesOrdenadas[i];
        let p = document.createElement("p");
        p.innerText = entidad.entidad + " " + entidad.nombre;
        p.classList.add("correo");
        divEntidades.appendChild(p);
    }
    entidadesElegidas=[];
    entidadesOrdenadas=[];
}

btnCopy.addEventListener('click', e=>{
    navigator.clipboard.writeText(mail.innerText);
    btnGenerar.classList.remove("clickedGreen");
    alert("Copiado exitosamente!")
})



