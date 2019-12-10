export class Carro {
    private Placa: string;
    private cor: string;
    private modelo: string;
    private ano: number;
    public ligado: boolean;

    /*agr preciso de metodos especificos (GETTERS E SETTERS) p manipular meus atributos*/

    public getPlaca(): string {
        return this.Placa;
    }
    public setPlaca(placa: string): void {
        this.Placa = placa;
    }

    public getCor(): string {
        return this.cor;
    }
    public setCor(cor: string): void {
        this.cor = cor;
    }
    public getModelo(): string {
        return this.modelo;
    }
    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }
    public getAno(): number {
        return this.ano;
    }
    public setAno(ano: number): void {
        this.ano = ano;
    }
    ligar(): void {
        this.ligado = true;
    }
    desligar(): void {
        this.ligado = false;
    }

    public andar(): void {
        if (this.ligado == true) {
            console.log("O carro " + this.getModelo() + " do ano " + this.ano + " esta andando...");
        } else {
            console.log("O carro esta desligado, ligue o carro");
        }
    }

    public parar(): void {
        if (this.ligado == true) {
            console.log("O carro " + this.getModelo() + " do ano " + this.ano + " esta acabou de parar"); //se usar ascento ele jahuo conc sozinho//
        } else {
            console.log("O carro esta desligado, ligue o carro");
        }
    }


}