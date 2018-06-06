function calc(x1, x2, operator) {
    return eval(`${x1} ${operator} ${x2}`);
}

let resultado = calc(1,2,"+");

console.log(resultado);

(function (x1, x2, operator) {
    return eval(`${x1} ${operator} ${x2}`);
})(1,2,"+");

let calc2 = (x1, x2, operator) => {
    return eval(`${x1} ${operator} ${x2}`);
}

window.addEventListener("focus", event => {
    console.log("focus");
});

document.addEventListener("click",event => {
    console.log('click');
});

let agora = new Date();

console.log(agora.toLocaleDateString("pt-PT"));

let carros = ["palio 98", "toro", "uno", 10, true, new Date(), function(){}];

console.log(carros);
console.log(carros[0]);

carros.forEach(function(value, index){
    console.log(index, value);
});

let celular = function(){
    this.cor = "prata";
}

let objeto = new celular();

console.log(objeto);

class celular2 {
  constructor(){
      this.cor = "prata";
  }

  ligar() {
      console.log("uma ligação");
      return "ligando";
  }
}

let obj = new celular2();

console.log(obj.ligar());