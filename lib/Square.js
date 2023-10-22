const Shape = require("./Shape");

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    render() {
        let html = 
        `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n` +
        `   <rect width="200" height="200" fill="${this.shapeColor}"></rect>\n` +
        `   <text x="75" y="110" font-family="helvetica" font-size="30" fill="${this.textColor}">${this.text}</text>\n` +
        `</svg>`

        return html;
    }
}

module.exports = Square;