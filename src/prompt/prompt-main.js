import chalk from "chalk";

const mainPrompt = [
    {
        name:"select",
        description: chalk.magenta.bold ("Escolha a ferramenta ( 1 - QRCODE | 2 - PASSWORD )"),
        pattern: /^[1-2]+$/,
        message: chalk.red ("Escolha apenas entre 1 - QRCODE e 2 - PASSWORD"),
        require : true,
    }
]

export default mainPrompt;