const Shape = require("../lib/Shape");

describe("Shape", () => {
    it("should not accept more than 3 characters", () => {
        expect(() => {
            let shape = new Shape("test", "white","black");
        }).toThrow()
    })

    test("if a hex code, it should not be a valid hex color", () => {
        expect(() => {
            let shape = new Shape("abc", "#as433i", "black");
        }).toThrow()
    })

    test("if not a hex code, it should not be a valid CSS color", () => {
        expect(() => {
            let shape = new Shape("abc", "superblue", "black");
        }).toThrow()
    })

    it("should accept a CSS color regardless of case", () => {
        let shape = new Shape("abc", "WHITE", "black");
        expect(shape.textColor).toBe("white");
    })
})