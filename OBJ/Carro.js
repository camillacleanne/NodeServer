"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro() {
    }
    Carro.prototype.andar = function () {
        if (this.ligado == true) {
            console.log("O carro " + this.modelo + " do ano " + this.ano + " esta andando...");
        }
        else {
            console.log("O carro esta desligado, ligue o carro");
        }
    };
    Carro.prototype.parar = function () {
        if (this.ligado == true) {
            console.log("O carro " + this.modelo + " do ano " + this.ano + " esta acabou de parar");
        }
        else {
            console.log("O carro esta ligado");
        }
    };
    Carro.prototype.ligar = function () {
        this.ligado = true;
    };
    Carro.prototype.desligar = function () {
        this.ligado = false;
    };
    return Carro;
}());
exports.Carro = Carro;
