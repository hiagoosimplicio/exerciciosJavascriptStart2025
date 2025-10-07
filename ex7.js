const readlineSync = require('readline-sync');

let login = readlineSync.question("Insira a Login: ");
let senha = readlineSync.question("Insira sua senha: ");
let tentativa = 3;

while (true){ 
    if(login === "hiago1242@gmail.com" && senha === "wasd12345"){
            console.log("Login Efetuado com Sucesso!");
            break;
    }
    else if(login != "hiago1242@gmail.com" && senha != "wasd12345"){
    console.log("Login ou Senha incorreto(s)!!\nTente Novamente!\n ");
    tentativa -= 1;
    console.log(`Você tem ${tentativa} tentativa(s)!`);
    let login = readlineSync.question("Insira seu Login: ");
    let senha = readlineSync.question("Insira sua senha: ");
    }
     if(tentativa < 1){
            console.log("Acesso Negado!");
            break;
        }
    }