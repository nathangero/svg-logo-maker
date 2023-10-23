const { Square } = require("../lib/Shape");

describe("Square", () => {
    it("should return a valid <rect> and <text> inside of a <svg> tag", () => {
        const square = new Square("abc", "white", "black");
        const result =
        `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n` +
        `   <rect width="200" height="200" fill="black"></rect>\n` +
        `   <text x="75" y="110" font-family="helvetica" font-size="30" fill="white">abc</text>\n` +
        `</svg>`

        expect(square.render()).toBe(result);
    })
})