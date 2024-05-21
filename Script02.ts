class Monstro {
    nome: string;
    forca: number;
    defesa: number;
    raridade: string;
  
    constructor(nome: string, forca: number, defesa: number, raridade: string) {
      this.nome = nome;
      this.forca = forca;
      this.defesa = defesa;
      this.raridade = raridade;
    }
  
    exibirInformacoes(): void {
      console.log(`Nome: ${this.nome}`);
      console.log(`Força: ${this.forca}`);
      console.log(`Defesa: ${this.defesa}`);
      console.log(`Raridade: ${this.raridade}`);
    }
  }
  
  const monstro1 = new Monstro("Goblin", 10, 5, "Comum");
  const monstro2 = new Monstro("Orc", 20, 10, "Raro");
  
  monstro1.exibirInformacoes();
  monstro2.exibirInformacoes();
  