class Setup {

    static resolucao: string = "4k";
    static dificuldade: string = "Médio";
    static raytracing: boolean = false;
  
    static definirResolucao(novaResolucao: string): void {
      if (
        novaResolucao === "HD" ||
        novaResolucao === "FullHD" ||
        novaResolucao === "2k" ||
        novaResolucao === "4k"
      ) {
        this.resolucao = novaResolucao;
      } else {
        console.error("Resolução inválida!");
      }
    }
  
    static definirDificuldade(novaDificuldade: string): void {
      if (novaDificuldade === "Fácil" || novaDificuldade === "Normal" || novaDificuldade === "Difícil") {
        this.dificuldade = novaDificuldade;
      } else {
        console.error("Dificuldade inválida!");
      }
    }
  
    static definirRaytracing(novoRaytracing: boolean): void {
      this.raytracing = novoRaytracing;
    }
  
    static listarInformacoes(): void {
      console.log(`Resolução: ${this.resolucao}`);
      console.log(`Dificuldade: ${this.dificuldade}`);
      console.log(`Raytracing: ${this.raytracing}`);
    }
  }
  
  Setup.definirResolucao("FullHD");
  Setup.definirDificuldade("Normal");
  Setup.definirRaytracing(true);
  
  Setup.listarInformacoes();
  