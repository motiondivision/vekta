import { degToRad } from "./deg-to-rad"

export function degToY(degrees: number, radius: number = 1) {
  return Math.sin(degToRad(degrees)) * radius
}
