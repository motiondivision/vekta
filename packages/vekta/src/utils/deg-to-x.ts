import { degToRad } from "./deg-to-rad"

export function degToX(degrees: number, radius: number = 1) {
  return Math.cos(degToRad(degrees)) * radius
}
