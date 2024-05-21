class Personagem {
    // Atributos
    private nome: string;
    private hp: number;
    private mp: number;
    private forca: number;
    private defesa: number;
    private agilidade: number;
    private tipo: string;
  
    constructor(nome: string, tipo: string) {
      this.nome = nome;
      this.tipo = tipo;
  
      this.hp = 100;
      this.mp = 70;
      this.forca = 60;
      this.defesa = 40;
      this.agilidade = 25;

      switch (this.tipo) {
        case "Mago":
          this.mp += 30;
          break;
        case "Guerreira":
          this.hp += 30;
          this.forca += 15;
          break;
        case "Assassino":
          this.agilidade += 15;
          break;
        case "Arqueiro":
          this.agilidade += 5;
          this.forca += 7;
          this.hp += 5;
          break;
        default:
          console.error(`Tipo de personagem inválido: ${this.tipo}`);
          break;
      }
    }

    getNome(): string {
      return this.nome;
    }
  
    getTipo(): string {
      return this.tipo;
    }
  
    getHp(): number {
      return this.hp;
    }
  
    getMp(): number {
      return this.mp;
    }
  
    getForca(): number {
      return this.forca;
    }
  
    getDefesa(): number {
      return this.defesa;
    }
  
    getAgilidade(): number {
      return this.agilidade;
    }
  
    exibirInformacoes(): void {
      console.log(`Nome: ${this.nome}`);
      console.log(`Tipo: ${this.tipo}`);
      console.log(`HP: ${this.hp}`);
      console.log(`MP: ${this.mp}`);
      console.log(`Força: ${this.forca}`);
      console.log(`Defesa: ${this.defesa}`);
      console.log(`Agilidade: ${this.agilidade}`);
    }
  }
  
  const personagem1 = new Personagem("Arthur", "Guerreira");
  const personagem2 = new Personagem("Liliana", "Mago");
  const personagem3 = new Personagem("Thales", "Assassino");
  const personagem4 = new Personagem("Arya", "Arqueiro");
  
  personagem1.exibirInformacoes();
  personagem2.exibirInformacoes();
  personagem3.exibirInformacoes();
  personagem4.exibirInformacoes();
  