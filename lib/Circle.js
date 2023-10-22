const svgBuilder = require("svg-builder");
const Shape = require("./Shape");

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    render() {
        let html = 
        `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n` +
        `   <circle cx="100" cy="100" r="100" fill="${this.shapeColor}"></circle>\n` +
        `   <text x="100" y="100" font-family="helvetica" font-size="30" fill="${this.textColor}">${this.text}</text>\n` +
        `</svg>`

        return html;
    }
}

module.exports = Circle;