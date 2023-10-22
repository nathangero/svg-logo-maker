const svgBuilder = require("svg-builder");

class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render() {
        return svgBuilder
        .circle({
            r: 40,
            fill: this.shapeColor,
            'stroke-width': 1,
            stroke: '#3B92BC',
            cx: 84,
            cy: 82
        }).text({
            x: 10,
            y: 20,
            'font-family': 'helvetica',
            'font-size': 15,
            stroke : '#fff',
            fill: this.textColor
        }, this.text).render();
    }
}

module.exports = Shape;
