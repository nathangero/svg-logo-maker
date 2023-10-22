const inquirer = require("inquirer");
const fs = require("fs");
const cssColors = require("css-color-names");
const Shape = require("./lib/Shape");
const Circle = require("./lib/Circle");
const Square = require("./lib/Square");
const Triangle = require("./lib/Triangle");

const questions = [
    {
        message: "Enter 3 characters for your logo:",
        name: "name",
        validate: function(value) {
            if (value.length > 3) {
                console.log("Enter no more than 3 characters.")
                return false
            }

            return true
        }
    },
    {
        message: "What text color do you want? (CSS keyword or hex starting with #):",
        name: "textColor",
        validate: validateColor
    },
    {
        type: "list",
        message: "What shape do you want?",
        name: "shape",
        choices: [
            {
                name: "Circle",
                value: "circle",
            },
            {
                name: "Square",
                value: "square",
            },
            {
                name: "Triangle",
                value: "triangle",
            },
        ]
    },
    {
        message: "What shape color do you want? (CSS keyword or hex starting with #):",
        name: "shapeColor",
        validate: validateColor
    }
]


function validateColor(color) {
    if (color.includes("#")) {
        let regex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
        if (!regex.test(color)) {
            console.log(" invalid hex number")
            return false
        }

        return true
    }

    if (!cssColors[color.toLowerCase()]) {
        console.log("Color is not valid. Please try another or use hex")
        return false
    }
    return true
}

async function askUser() {
    let { name, textColor, shape, shapeColor } = await inquirer.prompt(questions);
    let logo;

    switch (shape) {
        case "circle":
            logo = new Circle(name, textColor, shapeColor);
            break;

        case "square":
            logo = new Square(name, textColor, shapeColor);
            break;
        
        case "triangle":
            logo = new Triangle(name, textColor, shapeColor);
            break;

        default: // This shouldn't run but just in case
            console.log("default");
            logo = new Shape(name, textColor, shapeColor);
    }

    // console.log("logo:", logo.render());

    fs.writeFile("./logo.svg", logo.render(), err => {
        err ? console.log(err) : console.log("Generated logo.svg")
    })
}

// For testing purposes
if (process.argv[2]) {
    let name = "nag";
    let textColor = "red";
    let shapeColor = "black";
    switch (process.argv[2]) {
        case "circle":
            console.log("circle");
            logo = new Circle(name, textColor, shapeColor);
            break;

        case "square":
            console.log("square");
            logo = new Square(name, textColor, shapeColor);
            break;
        
        case "triangle":
            console.log("triangle");
            logo = new Triangle(name, textColor, shapeColor);
            break;

        default: // This shouldn't run but just in case
            console.log("default");
            logo = new Shape(name, textColor, shapeColor);
    }

    // console.log("logo:", logo.render());

    fs.writeFile("./logo.svg", logo.render(), err => {
        err ? console.log(err) : console.log("Generated logo.svg")
    })
} else {
    askUser()
}