#!/usr/bin/env node

const figlet = require('figlet');
const chalk = require("chalk");
const clear = require('clear');
const inquirer = require('inquirer');
const resumeData = require('./resumeData.json');

let blueColor = chalk.blue.bold;
let redColor = chalk.red.bold;

var prompts = {
    type: "list",
    name: "option",
    message: "那么你想通过哪种方式了解我呢？",
    choices: [...Object.keys(resumeData), "Exit"]
  };

(function(){
    clear();    
    console.log(
        chalk.cyan.bold(
            figlet.textSync('      Chace Zhang     ',{
            horizontalLayout:'full',
        }))
    );
    console.log("\n")
    console.log(chalk.red.bold(" \u{1F916} 张枨 Student & Developer") + " \n\n + Believes in possibilities and always trying to look at the positive, brighter side of the story. \n + 相信各种可能性，总是试图看到故事积极、光明的一面。\n\n • I care a lot about building things that are genuinely useful and a pleasure to use. \n • Keep things simple, innovate and move quickly. Have empathy and make deliberate choices.")
    console.log("\n")    
    menu();  
})();

function menu(){
    inquirer.prompt(prompts).then(choice=>{
        let selectedOption = choice.option;
        if(selectedOption==="Exit"){
            console.log(redColor("\nThank you for showing interest. Have a great day !"));
            return;
        }
        console.log('\n====================================\n');
        
        resumeData[`${selectedOption}`].forEach(data => {
            console.log("\u{1F538}   "+ blueColor(data));
        });
        console.log('\n====================================\n');
        
        inquirer.prompt({
        type: "list",
        name: "option",
        message: "Go back or Exit?",
        choices: ["Back", "Exit"]
        })
        .then(choice => {
            if (choice.option == "Back") {
                menu();
            } else {
                console.log(redColor("\nThank you for showing interest. Have a great day !"));
                return;
            }
        });

    })
}