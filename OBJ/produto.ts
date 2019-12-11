//export class [NOME DA CLASSE]
export class Produto {
    // LISTA DE ATRIBUTOS
    // private [NOME DO ATRIBUTO]: [TIPO];
    private codigo: number;
    private nome: string;
    private detalhes: string;
    private preco: number;
    private estoque: number;
    private linkFoto: string;

    //  public constructor([LISTA DE PARAMETROS]) {  
    public constructor(_co: number, _no: string, _det: string, _prc: number, _est: number, _lnk: string) {
        //     this.[NOME DO ATRIBUTO] = [NOME DO PARAMETRO];
        this.codigo = _co;
        this.nome = _no;
        this.detalhes = _det;
        this.preco = _prc;
        this.estoque = _est;
        this.linkFoto = _lnk;
    }

    public getCodigo(): number {
        return this.codigo;
    }
    public setCodigo(_co: number): void {
        this.codigo = _co;
    }
    public getNome(): string {
        return this.nome;
    }
    public setNome(_no : string): void{
        this.nome = _no;
    }
    public getDetalhes() : string {
        return this.detalhes;
    }
    public setDetalhes (_det : string): void{
        this.detalhes = _det;
    }
    public getPreco (): number {
        return this.preco;
    }
    public setPreco (_prc : number): void{
        this.preco= _prc;
    }
    public getEstoque (): number{
        return this.estoque;
    }

    public setEstoque (_est : number): void{
        this.estoque = _est;
    }
    public getLinkFoto (): string{
        return this.linkFoto;
    }
    public getlinkFoto (_lnk: string): void{
        this.linkFoto = _lnk;
    }
    public getInfo (): void {
        console.log (`Produto = ${this.codigo}, ${this.nome}, ${this.detalhes}, ${this.preco}, ${this.estoque},${this.linkFoto}`)
    }
}



  // ...

  // (opcional)

       // CODIGO DAS ATRIBUIÇÕES

  //     ...
  // }

  // (métodos)

//   (padrão 1 - getters e setters)
 //  public get[NOME DO ATRIBUTO](): [TIPO DO ATRIBUTO]{
 //      return this.[NOME DO ATRIBUTO];
 //  }

 //  public set[NOME DO ATRIBUTO]( [NOME DO PARAMETRO] : [TIPO DO PARAMETRO]): void {
  //     this.[NOME DO ATRIBUTO] = [NOME DO PARAMETRO];
 //  }

//}