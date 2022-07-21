import { degToX } from "../"

describe("degToX", () => {
  test("Correctly converts degrees to the normalised X coordinate", () => {
    expect(degToX(0)).toBe(1)
    expect(degToX(45)).toBeCloseTo(0.707)
    expect(degToX(90)).toBeCloseTo(0)
    expect(degToX(180)).toBeCloseTo(-1)
    expect(degToX(360)).toBeCloseTo(1)
  })

  test("Correctly returns x scaled to radius", () => {
    expect(degToX(0, 2)).toBe(2)
    expect(degToX(45, 3)).toBeCloseTo(0.707 * 3)
    expect(degToX(90, 2)).toBeCloseTo(0)
    expect(degToX(180, 2)).toBeCloseTo(-2)
    expect(degToX(360, 2)).toBeCloseTo(2)
  })
})
