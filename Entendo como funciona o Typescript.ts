 
 
interface DadosDeEnviaEmail {
    para: string;
    id: string;
    assunto: string;
    texto: string;
 }

 function enviarEmail ({para, id, assunto, texto}: DadosDeEnviaEmail){
    console.log(para, id, assunto, texto);
 }

 class EnviarEmailParaUsuario {
    send(){
        enviarEmail({
            para: "joilton@rocketseat.com",
            id: "7777",
            assunto: "Fala com você!",
            texto: "Olá! Como você esta? Como foi seu final de semana passada",
        });
    }
 }