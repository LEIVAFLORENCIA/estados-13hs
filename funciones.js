function handleJsonResponse(r) {
  if (!r.ok) {
    throw new Error("ERROR EN AJAX");
  }
  return r.json();
}

function handleErrorResponse(err) {
  console.error(err);
}

async function buscarEntidades() {
  const respuestaServer = await fetch(URL + "/entidades");
  const entidades = await handleJsonResponse(respuestaServer);
  return entidades;
}

async function renderEntidades(){
  let entidades = await buscarEntidades();
  let contenido = entidades.map (e => `<button>${e.entidad}</button>`).join(''); 
  divEntidades.innerHTML = contenido;
}
