class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

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

        console.log(`O tipo ${this.tipo} usou ${tipoAtaque}`);
    }
}

let tiposHerois = ["guerreiro", "mago", "monge", "ninja"];

for (let i = 0; i < tiposHerois.length; i++) {
    let heroi = new Heroi("Valentim", 7, tiposHerois[i]);
    heroi.ataque();
}