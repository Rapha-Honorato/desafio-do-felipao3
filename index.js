class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'usou um ataque genérico';
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso da classe Heroi
  const meuHeroi = new Heroi('Gandalf', 1000, 'mago');
  meuHeroi.atacar(); // Saída: O mago atacou usando magia
  
  const outroHeroi = new Heroi('Aragorn', 35, 'guerreiro');
  outroHeroi.atacar(); // Saída: O guerreiro atacou usando espada
  