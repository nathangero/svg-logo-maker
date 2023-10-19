const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        message: "Enter 3 characters for your logo",
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
    // TODO: How to validate if color exists? Or just no validation and just have a default color?
    if (color.includes("#")) {
        let regex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
        if (!regex.test(color)) {
            console.log(" invalid hex number")
            return false
        }

        return true
    }

    // if (!CSS.supports("color", color)) {
    //     console.log(" Not a valid color, please try a different one")
    //     return false
    // }
    return true
}

async function askUser() {
    let { name, textColor, shape, shapeColor } = await inquirer.prompt(questions)
    console.log(name, textColor, shape, shapeColor)
}

askUser()