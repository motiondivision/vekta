import { radToDeg } from "../"

describe("radToDeg", () => {
  test("Correctly converts radians to degrees", () => {
    expect(radToDeg(1)).toBeCloseTo(180 / Math.PI)
    expect(radToDeg(2)).toBeCloseTo(114.59155902616465)
  })
})
