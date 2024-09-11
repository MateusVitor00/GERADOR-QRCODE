import prompt from "prompt";
import QrCode from "qrcode";

async function createQrCode(){
    QrCode.toString('https://cidademaisinfancia.sps.ce.gov.br/', {type: 'terminal'}, async(err, url)=> {
        console.log(url)
    })
}
prompt.start()

export default createQrCode;
