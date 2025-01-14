// expresion regular para enconttrar las imagens
export const imgRegex = /<img[^>]*src=["']([^"']+)["'][^>]*>/g;

// Función para extraer imágenes
export function enlaceDeImagenes(html: string): string[] {
  const matches: string[] = [];
  let match;

  while ((match = imgRegex.exec(html)) != null) {
    matches.push(match[1]); // Captura la URL de la imagen
  }
  return matches;
}

