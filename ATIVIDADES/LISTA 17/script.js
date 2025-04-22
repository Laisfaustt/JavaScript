//1
class Livro {
    constructor(titulo, autor, paginas){
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
    }

    mostrarDetalhes(){
        console.log(`livro: ${this.titulo}, autor: ${this.autor}, paginas: ${this.paginas}`)
    }
}
const livro = new Livro("melhor do que nos filmes", "Lynn Painter", 360);
livro.mostrarDetalhes();

//2
class ContaBancaria {
    constructor(titular, saldo){
        this.titular = titular
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }
    sacar(valor){
        this.saldo -= valor
    }
    verSaldo(){
        console.log(`O ${this.titular} tem: ${this.saldo}`)
    }
}
const contabancaria = new ContaBancaria("Lais", 200);
contabancaria.verSaldo();
contabancaria.depositar(500);
contabancaria.verSaldo();
contabancaria.sacar(200);
contabancaria.verSaldo();

//3
class Pet {
    constructor(nome, especie, idade){
        this.nome = nome
        this.especie = especie
        this.idade = idade
    }

    falar(fala){
        console.log(`nome: ${this.nome}, especie: ${this.especie}, idade: ${this.idade}, faz: ${fala}`)
    }
}
const pet = new Pet("thor", "cachorro", 3);
pet.falar("auau");

//4
class Filme {
    constructor(titulo, duracao, genero){
        this.titulo = titulo
        this.duracao = duracao
        this.genero = genero
    }

    assistir(){
        console.log(`Você está assistindo: ${this.titulo}, que dura  ${this.duracao} minutos`)
    }
}
const filme = new Filme("harry potter", 230);
filme.assistir();

//5
class Musica {
    constructor(titulo, artista, duracao){
        this.titulo = titulo
        this.artista = artista
        this.duracao = duracao
    }

    tocar(){
        console.log(`tocando ${this.titulo}, de ${this.artista}`)
    }
}
const musica = new Musica("Pyramids", "Franck Ocean");
musica.tocar();