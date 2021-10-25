function calcular(){
    //Pegando os elementos HTML
    let nome = document.getElementById("nome").value
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)
    let res = document.getElementById("res")

    //Processo
    let imc = peso / (altura * 2)
    
    //Saída de dados
    if(nome == "" || (peso == isNaN(peso) || altura == isNaN(altura))){
        alert("Por favor, preencha os dados corretamente.")
    }else{
        res.innerHTML = `<strong>${nome}</strong>, Seu IMC ideal é de: <strong>${imc.toFixed(1)} kg/m<sup>2</sup>.</strong> `
        res.style.color = "white"
        
    }
}
document.getElementById("calcular").addEventListener('click', calcular)