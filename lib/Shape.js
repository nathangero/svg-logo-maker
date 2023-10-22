const cssColors = require("css-color-names");

class Shape {
    constructor(text, textColor, shapeColor) {
        if (text.length > 3) {
            throw new Error("Please enter 3 or less characters");
        }

        // First check if color is a hex or css color name
        if (textColor.includes("#")) {
            let regex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
            if (!regex.test(color)) {
                throw new Error("Invalid text hex color");
            }
        }

        // Second check if css color is valid
        if (!cssColors[textColor.toLowerCase()]) {
            throw new Error("Text CSS Color is not valid. Please try another or use hex");
        }

        if (shapeColor.includes("#")) {
            let regex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
            if (!regex.test(color)) {
                throw new Error("Invalid shape hex color");
            }
        }

        if (!cssColors[shapeColor.toLowerCase()]) {
            throw new Error("Shape CSS Color is not valid. Please try another or use hex");
        }

        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
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

module.exports = Shape;
