# SVG Logo Maker

## Description

The purpose of this is to make a NodeJs application that will make a simple SVG based upon user input. It asks the user 4 questions:
1. 3 characters for your logo
2. Give a text color (css or hex color)
3. Pick a shape from a list
4. Give a shape color (css or hex color)

Currently, the list of shapes are: 
* Circle
* Square
* Triangle

There are validation checks for questions 1, 2, and 4. The amount of characters is checked if the length is less than 3. The colors are checked against a pre-made object of CSS colors, and against a Regex check of proper hex color format. 

## Video Walkthrough



## Learning Points

* SVG HTML elements have a specific syntax that isn't as obvious to follow.
* Making a SVG Polygon takes in a "points" field. Each pairing (separated by commas) are represented in a (x,y) pair. So for the triangle, the top of the triangle is (150, 0) because 150 is half of 300 (the max width).
* Making a validation check if a CSS color exists takes a little work. At least in just using node, there's no straightforward way to check if a CSS color exists. I had to use an object (via node package) that contained what seems to be all CSS colors.
* Unit testing helps make sure I make the proper checks in my code. Can also help refactor how some code is written to better organize code.
* Making Jest test cases is very simple but effective.


## Tests
* Shape constructor
    * If "text" is greater than 3 characters, throw error.
    * If "textColor" is an invalid hex or css color, throw error.
    * If "shapeColor" is an invalid hex or css color, throw error.
* Circle
    * If it returns the proper code inside of a svg:
    ```html
    <circle cx="100" cy="100" r="100" fill="${shapeColor}"></circle>
    <text x="75" y="110" font-family="helvetica" font-size="30" fill="${this.textColor}">${this.text}</text>
    ```
* Square
    * If it returns the proper code inside of a svg:
    ```html
    <rect width="200" height="200" fill="${this.shapeColor}"></rect>
    <text x="75" y="110" font-family="helvetica" font-size="30" fill="${this.textColor}">${this.text}</text>
    ```
* Triangle
    * If it returns the proper code inside of a svg:
    ```html
    <polygon points="150 0, 300 200, 0 200" fill="${this.shapeColor}"></polygon>
    <text x="124" y="130" font-family="helvetica" font-size="30" fill="${this.textColor}">${this.text}</text>
    ```

## Credits

[CSS Color Names package](https://github.com/bahamas10/css-color-names/tree/master)

[SVG Builder node package](https://www.npmjs.com/package/svg-builder)

### Resources

[Hex color checking](https://www.geeksforgeeks.org/javascript-check-if-a-string-is-a-valid-hex-color-representation/#)

[SVG Triangle points referrence](https://stackoverflow.com/a/54955284)
