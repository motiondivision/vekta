import { degToY } from "../"

describe("degToY", () => {
  test("Correctly converts degrees to the normalised X coordinate", () => {
    expect(degToY(0)).toBeCloseTo(0)
    expect(degToY(45)).toBeCloseTo(0.707)
    expect(degToY(90)).toBeCloseTo(1)
    expect(degToY(180)).toBeCloseTo(0)
    expect(degToY(270)).toBeCloseTo(-1)
    expect(degToY(360)).toBeCloseTo(0)
  })

  test("Correctly returns y scaled to radius", () => {
    expect(degToY(0, 2)).toBe(0)
    expect(degToY(45, 3)).toBeCloseTo(0.707 * 3)
    expect(degToY(90, 2)).toBeCloseTo(2)
    expect(degToY(180, 2)).toBeCloseTo(0)
    expect(degToY(360, 2)).toBeCloseTo(0)
  })
})
