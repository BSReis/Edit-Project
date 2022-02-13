function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "boa tarde") {
        return "Boa tarde, pretende saber as ultimas novidades?";
    } else if (input == "nada") {
        return "Obrigado por ter usado o nosso serviço";
    } else {
        return "Desculpe mas não entendi a sua questão, pode repetir?";
    }
} 