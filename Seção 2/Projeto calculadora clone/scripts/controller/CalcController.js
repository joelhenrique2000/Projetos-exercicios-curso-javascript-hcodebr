class CalcController {
    constructor(){
        this._displayCalc = "0";
        this._dataAtual;
    }

    get displayCalc() {
        return this._displayCalc;
    }
    
    get dataAtual() {
        return this._dataAtual;
    }
    
    set displayCalc(novoValor) {
        this._displayCalc = novoValor;
    }

    set dataAtual(novoValor) {
        this._dataAtual = novoValor;
    }  
}