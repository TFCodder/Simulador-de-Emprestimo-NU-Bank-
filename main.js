var emprestimo = document.getElementById("emprestimo");
var parcelas= document.getElementById("parcelas");
var juros = document.getElementById("juros");
const btn = document.getElementById("btn");
var valor_total= document.getElementById("valor_total");
var valor_parcelas = document.getElementById("valor_parcelas");
var valor_juros = document.getElementById("valor_juros");

btn.addEventListener("click",function(){
 var emprestimo_formatado =(parseFloat (emprestimo.value));
  valor_total.innerHTML = emprestimo_formatado + (emprestimo_formatado *(juros.value / 100));
  valor_parcelas.innerHTML = valor_total.innerHTML / parcelas.value;
  valor_juros.innerHTML = valor_total.innerHTML - emprestimo_formatado;

  emprestimo.value = '';
  parcelas.value = '';
  juros.value =  '';

});
