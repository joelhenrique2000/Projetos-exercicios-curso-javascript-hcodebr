class CalcController {
    constructor(){
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }

    initialize(){
        this.setDisplayDateTime();

        setInterval(() => {
            this.setDisplayDateTime();
        },1000); 
    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{day: "2-digit",month: "long", year: "numeric"});
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }

    set displayTime(newValue) {
        this._timeEl.innerHTML = newValue;
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayDate(newValue) {
        this._dateEl.innerHTML = newValue;
    }
        
    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(newValue) {
        this._displayCalcEl.innerHTML = newValue;
    }
    
    get currentDate() {
        return new Date();
    }

    set currentDate(newValue) {
        this._currentDate = newValue;
    }  
}