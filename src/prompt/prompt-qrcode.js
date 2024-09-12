import chalk from "chalk";

const qrCodePrompt = [
    {
    name: "link",
    description: chalk.green("Digite o link para gerar o qrcode"),
    pattern:/^(?:https?:\/\/)?(w{3}\.)?[\w_-]+((\.\w{2,}){1,2})(\/([\w\._-]+\/?)*(\?[\w_-]+=[^\?\/&]*(\&[\w_-]+=[^\?\/&]*)*)?)?$/,
    message: chalk.red("digite um Link valido para pesquisa"),
    required: true
    }
];

export default qrCodePrompt;