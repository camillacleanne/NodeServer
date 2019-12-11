"use strict";
exports.__esModule = true;
//export class [NOME DA CLASSE]
var Produto = /** @class */ (function () {
    //  public constructor([LISTA DE PARAMETROS]) {  
    function Produto(_co, _no, _det, _prc, _est, _lnk) {
        //     this.[NOME DO ATRIBUTO] = [NOME DO PARAMETRO];
        this.codigo = _co;
        this.nome = _no;
        this.detalhes = _det;
        this.preco = _prc;
        this.estoque = _est;
        this.linkFoto = _lnk;
    }
    Produto.prototype.getCodigo = function () {
        return this.codigo;
    };
    Produto.prototype.setCodigo = function (_co) {
        this.codigo = _co;
    };
    Produto.prototype.getNome = function () {
        return this.nome;
    };
    Produto.prototype.setNome = function (_no) {
        this.nome = _no;
    };
    Produto.prototype.getDetalhes = function () {
        return this.detalhes;
    };
    Produto.prototype.setDetalhes = function (_det) {
        this.detalhes = _det;
    };
    Produto.prototype.getPreco = function () {
        return this.preco;
    };
    Produto.prototype.setPreco = function (_prc) {
        this.preco = _prc;
    };
    Produto.prototype.getEstoque = function () {
        return this.estoque;
    };
    Produto.prototype.setEstoque = function (_est) {
        this.estoque = _est;
    };
    Produto.prototype.getLinkFoto = function () {
        return this.linkFoto;
    };
    Produto.prototype.getlinkFoto = function (_lnk) {
        this.linkFoto = _lnk;
    };
    Produto.prototype.getInfo = function () {
        console.log("Produto = " + this.codigo + ", " + this.nome + ", " + this.detalhes + ", " + this.preco + ", " + this.estoque + "," + this.linkFoto);
    };
    return Produto;
}());
exports.Produto = Produto;
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
