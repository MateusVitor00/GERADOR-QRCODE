import chalk from "chalk";
import prompt from "prompt";

const qrCodePrompt = [
    {
    name: "",
    description: chalk.bgGray("Escolha o tipo de QRCODE desejado( 1 - Imagem | 2 - Terminal"),
    pattern: /^[1-2]+$/,
    messagem: chalk.redBright( "Escolha entre 1 - Imagem ou 2 - Terminal"),
    require: true,
    }
]

export default qrCodePrompt;