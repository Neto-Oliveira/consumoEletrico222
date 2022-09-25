var potencia = 0
var dias = 0
var hora = 0
const precoKwh = 0.75
var consumoMensal = 0.0

const botaoConsumo = document.getElementById('botaoConsumo')

function calcularConsumo(){
 var potenciaWattsjs = document.getElementById('potenciaWatts')
 var diasjs = document.getElementById('dias')
 var horasjs = document.getElementById('horas')
 var consumoMensal = document.getElementById('consumo')

potenciaWattsjs = potenciaWattsjs.value
diasjs = diasjs.value
horasjs = horasjs.value

 // Potência em Watts x Dias por mês x Horas por dia  / 1000 x Preço kWh
// 5W x 30 Dias x 8.0 Horas  / 1000x R$ 0.75
//= R$ 0.90
 if (potenciaWattsjs > 1) {
  consumoMensal.innerHTML = ((potenciaWattsjs * diasjs * horasjs) / 1000) * 0.75
 }

}

botaoConsumo.addEventListener('click',calcularConsumo)



var valorTotal = 0
var numContas = 0
var tipoconta = ''
function cadastrar_contas() {
  var descricao = document.getElementById('descricao_conta')
  var valor = document.getElementById('valor_conta')
  var listagem = document.getElementById('contas')
  var resultado = document.getElementById('contas2')
  var dinheiro = Number(valor.value)
  //descricao.value = ''
  //valor.value = ''
  //let listacontas = []

  numContas++
  valorTotal = valorTotal + dinheiro

  tipoconta =
    tipoconta + descricao.value + ' - R$: ' + dinheiro + '.00 ' + '\n' + '<br>'

  listagem.innerHTML = tipoconta + '\n'

  resultado.innerHTML =
    numContas + ' contas' + ' total R$: ' + valorTotal + '.00'
  // listacontas.push(tipoconta.value)
  console.log(tipoconta)

  console.log(valorTotal)
  // contador do estilo antigo  numContas = numContas + 1 , moderno: numContas++
  console.log(numContas)
  //console.log(listacontas[0])
}
