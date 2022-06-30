function calcular() {
    
    var salarioBruto = parseInt(document.getElementById('salarioBruto').value);
    console.log(salarioBruto);

    var discontoINSS = salarioBruto * 0.05;
    console.log(discontoINSS);

    var discontoIRPF = salarioBruto * 0.07;
    console.log(discontoIRPF);

    var salarioLiquido = salarioBruto - discontoINSS - discontoIRPF;

    document.getElementById('salarioLiquido').value = salarioLiquido.toFixed(2);
}