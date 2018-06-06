class CalcController {
    constructor(){
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
    }

    initialize(){
        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "4567";
        dateEl.innerHTML = "00/00/0000";
        timeEl.innerHTML = "00:00:00";
    }
        
    get displayCalc() {
        return this._displayCalc;
    }
    
    get currentDate() {
        return this._currentDate;
    }
    
    set displayCalc(newValue) {
        this._displayCalc = newValue;
    }

    set currentDate(newValue) {
        this._currentDate = newValue;
    }  
}