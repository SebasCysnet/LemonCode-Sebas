import "./style.css";

// Referencias a los elementos del DOM
const textArea = document.getElementById("html-input") as HTMLTextAreaElement
const botonDOMExtraerImagenes = document.getElementById("extract-button") as HTMLButtonElement
const contenedorDOMResultados = document.getElementById("results") as HTMLDivElement

// boton DOM del "extraer imagenes"
// retorna un array de imagenes
botonDOMExtraerImagenes.addEventListener("click", buscaYExtraeImagenes)
// expresion regular para enconttrar las imagens
const imgRegex = /<img[^>]*src=["']([^"']+)["'][^>]*>/g;

// Función para extraer imágenes
function enlaceDeImagenes(html: string): string[] {
  const matches: string[] = []
  let match
  
  while ((match = imgRegex.exec(html)) != null) { 
    matches.push(match[1]) // Captura la URL de la imagen
  }
  return matches
}

// Función FINAL para extraer imágenes
function buscaYExtraeImagenes() {
  const html = textArea.value; // capturamos todo lo que haya en el textarea

  // sala solo las URL de las imagenes encontradas
  const imageUrls = enlaceDeImagenes(html)
  
  if (imageUrls.length == 0) {
    console.error("no se ha encontrado ninguna imagen")
    alert("no se ha encontrado ninguna imagen")
    return;
  }

  // Enseñamos todos los resultados, si llegamos aqui damos por echo que algo ha encontrado
  contenedorDOMResultados.innerHTML = "<p>Imágenes encontradas:</p>";
  const list = document.createElement("ul");

  imageUrls.forEach((url) => {
    const item = document.createElement("li");
    item.innerHTML = `<a href="${url}" target="_blank">${url}</a>`;
    list.appendChild(item);
  });
  contenedorDOMResultados.appendChild(list);
}

