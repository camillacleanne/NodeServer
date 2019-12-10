import { Carro } from "./Carro";

let c1:Carro; //aqui apenas declarei uma "referencia" a um carro, preciso criar o objeto
c1 = new Carro (); //agr sim. aloquei (reservei) memoria p armazenar as coisas
let c2: Carro;
c2 = new Carro;
//preencher dados

c1.setAno (1968);
c1.setModelo ("Fuscao Neuvoso");
c1.setPlaca ("ABC1234");
c1.ligado = false;

c2.setAno (2000);
c2.setModelo ("caminhonetxe");
c2.setPlaca ("ccc111");
c2.ligado = false;

c1.andar();
c1.parar();

//vamos 
c2.ligar(); 
c2.andar();
c2.parar();
c2.desligar();
