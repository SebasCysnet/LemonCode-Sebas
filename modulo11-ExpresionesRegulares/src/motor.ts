import { enlaceDeImagenes } from "./modal";

export function extraerImagenes(html: string): string[] {
  return enlaceDeImagenes(html)
}