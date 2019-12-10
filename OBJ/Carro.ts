export class Carro{
    placa  : string;
    cor    : string;
    modelo : string;
    ano    : number;
    ligado : boolean;
    


    andar(): void{
        if(this.ligado == true){
        console.log("O carro "+this.modelo+" do ano "+this.ano+" esta andando...");
    }else{
        console.log("O carro esta desligado, ligue o carro");
    }
    }

    parar (): void{
        if (this.ligado == true){
        console.log("O carro "+this.modelo+" do ano "+this.ano+" esta acabou de parar"); //se usar ascento ele ja conc sozinho//
        }else {
        console.log("O carro esta desligado, ligue o carro");
            }
                }

    ligar(): void{
        this.ligado = true;
    }
    desligar(): void{
        this.ligado = false;
    }
}