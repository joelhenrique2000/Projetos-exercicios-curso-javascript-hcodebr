class CalcController {
    constructor(){
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
        this._operation = [];
    }

    initialize(){
        this.setDisplayDateTime();

        setInterval(() => {
            this.setDisplayDateTime();
        },1000); 
    }

    initButtonsEvents() {
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach(element => {
            this.addEventListenerAll(element,'click drag',e => {
                let textBtn = element.className.baseVal.replace("btn-","");
                this.execBtn(textBtn);
            });
            this.addEventListenerAll(element, "mouseover mouseup mousedown", e => {
                element.style.cursor = "pointer";
            });
        });
    }

    clearAll() {
        this._operation = [];
    }

    clearEntry() {
        this._operation.pop();
    }

    setError() {
        this.displayCalc = "Error";
    }

    getLastOperation() {
        return this._operation[this._operation.length-1];
    }

    setLastOperation(value) {
        this._operation[this._operation.length-1] = value;
    }

    isOperator(value) {
        return ['+',"-","*","%","/"].indexOf(value) > -1;
    }

    addOperation(value) {
        if (isNaN(this.getLastOperation())) {
            if (this.isOperator(value)) {
                setLastOperation(value);
            } else if(isNaN(value)) {
                
                console.log(value);
            }else {
                this._operation.push(parseInt(value));
            }
        } else {
            let newValue = this.getLastOperation().toString() + value.toString();
            this.setLastOperation(parseInt(newValue));
        }

        console.log(this._operation);
    }

    execBtn(value) {
        switch (value) {
            case 'ac' :
                this.clearAll();
                break;
            case 'ce':
                this.clearEntry();
                break;
            case 'soma':
                this.addOperation('+');                
                break;
            case 'subtracao':
                this.addOperation('-');
                break;
            case 'divisao':
                this.addOperation('/');
                break;
            case 'multiplicacao':
                this.addOperation('*');
                break;
            case 'porcento':
                this.addOperation('%');
                break;
            case 'igual':
                this.addOperation('=');
                break;
            case 'ponto':
                this.addOperation('ponto');
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(value);
                break;
            default:
                this.setError();
                break;
            }
    }

    addEventListenerAll(element, events, fn) {
        events.split(" ").forEach(function(event) {
            element.addEventListener(event, fn, false);
        });
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