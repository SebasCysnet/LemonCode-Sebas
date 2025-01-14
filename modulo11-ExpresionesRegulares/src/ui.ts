export const contenedorDOMResultados = document.getElementById("results")

export function mostrarResultados(imageUrls: string[]) {
  if (imageUrls.length === 0) {
    console.error("No se ha encontrado ninguna imagen")
    alert("No se ha encontrado ninguna imagen")
    return
  }

  if (contenedorDOMResultados instanceof HTMLElement) {
    // Enseñamos todos los resultados, si llegamos aqui damos por echo que algo ha encontrado
    contenedorDOMResultados.innerHTML = "<p>Imágenes encontradas:</p>"
    const list = document.createElement("ul")

    imageUrls.forEach((url) => {
      const item = document.createElement("li")
      item.innerHTML = `<a href="${url}" target="_blank">${url}</a>`
      list.appendChild(item)
    })

    contenedorDOMResultados.appendChild(list)
    
  }
}