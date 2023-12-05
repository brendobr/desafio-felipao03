//Aqui declaramos a "class" contendo os atributos do Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
// Estrutura de decisão
    ataque() {
        let tipoAtaque;

        if (this.tipo === "mago") {
            tipoAtaque = "magia";
        } else if (this.tipo === "guerreiro") {
            tipoAtaque = "espada";
        } else if (this.tipo === "monge") {
            tipoAtaque = "artes marciais";
        } else if (this.tipo === "ninja") {
            tipoAtaque = "shuriken";
        }
// mensagem printando o tipo do heroi e o tipo de ataque utilizado
        console.log(`O tipo ${this.tipo} usou ${tipoAtaque}`);
    }
}
// Array  contendo os tipo de Heroi
let tiposHerois = ["guerreiro", "mago", "monge", "ninja"];
// Loop para decidir o tipo do heroi
for (let i = 0; i < tiposHerois.length; i++) {
    let heroi = new Heroi("Valentim", 7, tiposHerois[i]);
    heroi.ataque();
}
