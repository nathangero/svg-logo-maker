const svgBuilder = require("svg-builder");
const Shape = require("./Shape");

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    render() {
        let html = 
        `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n` +
        `   <polygon points="50 15, 100 100, 0 100" fill="${this.shapeColor}"></polygon>\n` +
        `   <text x="100" y="100" font-family="helvetica" font-size="30" fill="${this.textColor}">${this.text}</text>\n` +
        `</svg>`

        return html;
    }
}

module.exports = Triangle;