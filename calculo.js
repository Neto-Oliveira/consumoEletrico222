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
