const Shape = require("./Shape");

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    render() {
        let html = 
        `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n` +
        `   <circle cx="100" cy="100" r="100" fill="${this.shapeColor}"></circle>\n` +
        `   <text x="75" y="110" font-family="helvetica" font-size="30" fill="${this.textColor}">${this.text}</text>\n` +
        `</svg>`

        return html;
    }
}

module.exports = Circle;