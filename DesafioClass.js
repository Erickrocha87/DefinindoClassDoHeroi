const prompt = require('prompt-sync')();
let decisão = true;
do{
class Hero{

    constructor(nome, idade, tipo){

        this.nome = prompt("Escreva aqui o nome do Herói: ")
        this.idade = prompt("Escreva aqui a idade do Herói: ")
        this.tipo = prompt("Escreva aqui o tipo do Herói (Mago, Guerreiro, Monge ou Ninja: ")

    }
    atacar(ataque){
        this.ataque = ataque
        if (this.tipo = "mago" || this.tipo == "Mago")
        {
            this.ataque = "Usou magia";
            console.log(`O ${heroi.tipo} atacou ${this.ataque}`);
        }
        else if (this.tipo = "Guerreiro" || this.tipo == "guerreiro")
        {
            this.ataque = "Usou espada";
            console.log(`O ${heroi.tipo} atacou ${this.ataque}`);
        }
        else if (this.tipo = "Monge" || this.tipo == "monge")
        {
            this.ataque = "Usou artes marciais";
            console.log(`O ${heroi.tipo} atacou ${this.ataque}`);
        }
        else if (this.tipo = "Ninja" || this.tipo == "ninja")
        {
            this.ataque = "Usou shuriken";
            console.log(`O ${heroi.tipo} atacou ${this.ataque}`);
        }
    }
}

heroi = new Hero()
heroi.atacar();
console.log("Deseja continuar ? ")
switch(decisão){
    case "sim":
        decisão = true;
        break;
    case "não":
        decisão = false;
        break;
    default:
        console.log("Opção inválida");

}
}while(decisão != false)