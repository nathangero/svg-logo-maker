const Circle = require("../lib/Circle");

describe("Circle", () => {
    it("should return a valid <rect> and <text> inside of a <svg> tag", () => {
        const circle = new Circle("abc", "white", "black");
        const result =
        `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n` +
        `   <circle cx="100" cy="100" r="100" fill="black"></circle>\n` +
        `   <text x="75" y="110" font-family="helvetica" font-size="30" fill="white">abc</text>\n` +
        `</svg>`

        expect(circle.render()).toBe(result);
    })
})