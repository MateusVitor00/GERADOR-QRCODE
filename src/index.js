import prompt from "prompt";
import mainPrompt from "./prompt/prompt-main.js"
import chalk from "chalk";

async function main(){
    prompt.get(mainPrompt, async (err, choose) =>{
        if(choose.select == 1){
            console.log(chalk.blue.bold("\nEscolheu QRCODE"));
        }if(choose.select ==  2) {
            console.log(chalk.blueBright.bold("\nEscolheu Password"));
        }
    });

    prompt.start()
}

main()