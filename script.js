const nomes = [
  "André", "Mariana", "Carla", "Lucas", "Fernanda", "João", "Ana Paula", 
  "Beatriz", "Rafael", "Luiza", "Gabriel", "Camila", "Pedro", "Sofia", 
  "Mateus", "Isabela", "Victor", "Juliana", "Felipe", "Laura", "Gustavo", 
  "Carolina", "Thiago", "Amanda", "Bruno", "Larissa", "Daniel", "Bianca", 
  "Leonardo", "Natália", "Caio", "Patrícia", "Marcelo", "Vanessa", "Henrique",
  "Julia", "Rodrigo", "Raquel", "Diego", "Fernanda", "Alex", "Clara", "Vitor",
  "Lívia", "Samuel", "Nicole", "Enzo", "Alice", "Emanuel", "Camila"
];

const popup = document.getElementById('popup');

function mostrarPopup() {
  const nome = nomes[Math.floor(Math.random() * nomes.length)];
  popup.textContent = `${nome} acabou de entrar no grupo!`;
  popup.classList.add('show');
  setTimeout(() => popup.classList.remove('show'), 3000);
}
setInterval(mostrarPopup, 3500);

let contador = 35;
function reduzirContador() {
  contador--;
  if (contador < 0) contador = 0;
  document.getElementById('contador').textContent = contador;
}
setInterval(reduzirContador, 2000);

function criarBolha() {
  const mensagens = ["💖 Cupom liberado!", "✨ Promoção ativa!", "🎁 Novidades chegando!"];
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.textContent = mensagens[Math.floor(Math.random() * mensagens.length)];
  bubble.style.left = Math.random() * (window.innerWidth - 100) + 'px';
  document.body.appendChild(bubble);
  setTimeout(() => bubble.remove(), 5000);
}
setInterval(criarBolha, 4000);
