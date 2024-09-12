import prompt from "prompt";
import qrCodePrompt from "./prompt/prompt-qrcode.js";
import createQrCode from "./services/qr-code/createQrCode.js";


async function main(){
    prompt.get(qrCodePrompt,createQrCode)

    prompt.start()
};

main()