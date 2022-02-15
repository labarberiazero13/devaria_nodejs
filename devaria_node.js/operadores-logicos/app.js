const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Checando se você é maior de 18 anos e verificação de habilitação')
console.log('Verificando seu horário na lista');

readLine.question('Qual seu ano de nascimento?', ano => {
    if(ano > 2004){
        console.log('Você não tem 18 anos');
    }else{
        readLine.question('Você tem habilitado? (Sim/Não)', temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log('Você não tem habilitação')
            }else{
                readLine.question('Qual o seu nome?', nome =>{
                    switch(nome){
                        case 'Lucas':
                            console.log('Bem vindo ao Kart Lucas');
                            break;
                        case 'Rodrigo':
                            console.log('Bem vindo ao Kart Rodrigo');
                            break;
                        default:
                            console.log('Seu nome não foi identificado na lista de presença');
                    }
                });
            }
        })
    }
});