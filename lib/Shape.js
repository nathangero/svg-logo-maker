const svgBuilder = require("svg-builder");

class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    testRender() {
        return svgBuilder
        .circle({
            r: 40,
            fill: 'none',
            'stroke-width': 1,
            stroke: '#CB3728',
            cx: 42,
            cy: 82
        }).circle({
            r: 40,
            fill: 'none',
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
            fill: '#fff'
        }, 'My logo').render();
    }
}

module.exports = Shape;
