const svgBuilder = require("svg-builder");
const Shape = require("./Shape");

class Circle extends Shape {
    render() {
        svgBuilder.width(300).height(200);
        let rectOptions = {
            r: 40,
            cx: 0,
            cy: 0,
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

        return svgBuilder.circle(rectOptions).text(textOptions, this.text).render();
    }
}

module.exports = Circle;