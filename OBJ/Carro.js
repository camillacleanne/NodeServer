"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro() {
    }
    /*agr preciso de metodos especificos (GETTERS E SETTERS) p manipular meus atributos*/
    Carro.prototype.getPlaca = function () {
        return this.placa;
    };
    Carro.prototype.setPlaca = function (placa) {
        this.placa = placa;
    };
    Carro.prototype.getCor = function () {
        return this.cor;
    };
    Carro.prototype.setCor = function (cor) {
        this.cor = cor;
    };
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Carro.prototype.getAno = function () {
        return this.ano;
    };
    Carro.prototype.setAno = function (ano) {
        this.ano = ano;
    };
    Carro.prototype.ligar = function () {
        this.ligado = true;
    };
    Carro.prototype.desligar = function () {
        this.ligado = false;
    };
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
            console.log("O carro " + this.modelo + " do ano " + this.ano + " esta acabou de parar"); //se usar ascento ele jahuo conc sozinho//
        }
        else {
            console.log("O carro esta desligado, ligue o carro");
        }
    };
    return Carro;
}());
exports.Carro = Carro;
