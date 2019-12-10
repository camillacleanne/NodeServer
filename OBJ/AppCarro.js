"use strict";
exports.__esModule = true;
var Carro_1 = require("./Carro");
var c1; //aqui apenas declarei uma "referencia" a um carro, preciso criar o objeto
c1 = new Carro_1.Carro(); //agr sim. aloquei (reservei) memoria p armazenar as coisas
//preencher dados
c1.ano = 1968;
c1.modelo = "Fuscao Neuvoso";
c1.placa = "ABC1234";
//vamos 
c1.ligar();
c1.andar();
c1.parar();
c1.desligar();
c1.andar();
c1.parar();
