let cor = "verde";

if (cor === "verde") {
    console.log("siga");
} else {
    console.log("pare");
}

if (cor === "verde") {
    console.log("siga");
} else if (cor === "amarelo") {
    console.log("atenção");
} else {
    console.log("pare");
}

switch (cor) {
    case "verde":
        console.log("siga");
        break;
    case "amarelo":
        console.log("atenção");
        break;
    case "vermelho":
        console.log("pare");
        break;
    default:
        console.log("Erro");
        break;
}

let n = 5;
for (let i = 0; i <= 10; i++) {
    console.log(`${i} X ${n} = ${i*n}`);
}