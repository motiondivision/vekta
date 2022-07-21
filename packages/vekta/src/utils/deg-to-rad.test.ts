import { degToRad } from "../"

describe("degToRad", () => {
  test("Correctly converts degrees to radians", () => {
    expect(degToRad(1)).toBeCloseTo(Math.PI / 180)
    expect(degToRad(45)).toBeCloseTo(0.7853981633974483)
    expect(degToRad(360)).toBeCloseTo(6.283185307179586)
  })
})
