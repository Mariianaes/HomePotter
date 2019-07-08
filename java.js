let potters = [];

function Potter(tempoAtrasoParaIniciar) {
  this.el = document.createElement('img');
  this.el.src = 'images/potter.png';
  this.el.style.width = '70px';
  this.el.style.position = 'absolute';

  this.el = document.body.appendChild(this.el);

  this.posiciona(tempoAtrasoParaIniciar);
}

Potter.prototype.remove = function() {
  document.body.removeChild(this.el);
};

Potter.prototype.posiciona = function(tempoAtrasoParaIniciar) {
  this.porcentagemTrajeto = 0;
  this.xInicial = Math.random() < 2 ? -15 : window.innerWidth + 15;
  this.yInicial = Math.random() * document.body.clientHeight;
  this.xFinal = this.xInicial < 0 ? window.innerWidth + 15 : -15;
  this.yFinal = Math.random() * document.body.clientHeight;
  this.el.style.left = `${this.xInicial}px`;
  this.el.style.bottom = `${this.yInicial}px`;
  this.tempoTrajeto = 3000 + Math.random() * 3000;
  this.tempoAtrasoParaIniciar = tempoAtrasoParaIniciar || Math.random() * 7000;
};

Potter.prototype.atualiza = function(delta) {
  if (this.tempoAtrasoParaIniciar >= 0) {
    this.tempoAtrasoParaIniciar -= delta;
    return;
  }
  this.porcentagemTrajeto += delta / this.tempoTrajeto;
  this.x = this.xInicial + this.porcentagemTrajeto * (this.xFinal - this.xInicial);
  this.y = this.yInicial + this.porcentagemTrajeto * (this.yFinal - this.yInicial) + Math.sin(this.porcentagemTrajeto* 4 * 3.14159) * 40;
  this.y = Math.max(this.y, 0);
  this.el.style.left = `${this.x}px`;
  this.el.style.bottom = `${this.y}px`;

  if (this.porcentagemTrajeto >= 1) {
    this.posiciona();
  }
};

let inicio = null;

function atualizaPotters(agora) {
  if (!inicio) inicio = agora;
  let delta = agora - inicio;
  for (potter of potters) {
    potter.atualiza(delta);
  }
  inicio = agora;
  window.requestAnimationFrame(atualizaPotters);
}
atualizaPotters(0);


document.addEventListener('keyup', function(e) {
  if (e.key === '+' || e.key === '=') {
    let novaPotter = new Potter(1);
    potters.push(novaPotter);
  } else if (e.key === '-' || e.key === '_') {
    potter = potters.pop();
    if (potter) {
      potter.remove();
    }
  }
});

document.body.style.overflowX = 'hidden';
potters.push(new Potter());
potters.push(new Potter());
potters.push(new Potter());
potters.push(new Potter());
potters.push(new Potter());