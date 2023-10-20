const svgBuilder = require("svg-builder");
const Shape = require("./Shape");

class Square extends Shape {
    render() {
        svgBuilder.width(300).height(200);
        let rectOptions = {
            width: 200,
            height: 200,
            fill: this.shapeColor,
            "stroke-width": 0,
        }

        let textOptions = {
            x: 100,
            y: 100,
            "font-family": "helvetica",
            "font-size": 30,
            fill: this.textColor
        }

        return svgBuilder.rect(rectOptions).text(textOptions, this.text).render();
    }
}

module.exports = Square;