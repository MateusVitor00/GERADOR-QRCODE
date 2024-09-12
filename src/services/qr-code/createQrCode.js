import qrcode from "qrcode-terminal";
import chalk from "chalk";

async function createQrCode(err, result){
    if(err){
        console.log("Erro on aplication")
        return;
    }
    const isSmall = result;
    qrcode.generate(result.link, {small: isSmall}, (qrcode) =>{
        console.log(chalk.green("QRCODE gerado com sucesso:\n"))
        console.log(qrcode);
    });
}

export default createQrCode;