const Triangle = require("../lib/Triangle");

describe("Triangle", () => {
    it("should return a valid <rect> and <text> inside of a <svg> tag", () => {
        const triangle = new Triangle("abc", "white", "black");
        const result =
        `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n` +
        `   <polygon points="150 0, 300 200, 0 200" fill="black"></polygon>\n` +
        `   <text x="124" y="130" font-family="helvetica" font-size="30" fill="white">abc</text>\n` +
        `</svg>`

        expect(triangle.render()).toBe(result);
    })
})