const TEMPO_MINIMO = 200;    // 1s em milissegundos
const TEMPO_VARIAVEL = 100;  // 3s
const bolhaEl = carregaUmaImagem('images/oculospotter.png');

function carregaUmaImagem(path) {
    const img = new Image();
    img.src = path;
    return img;
}

function getLarguraJanela() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}


function criaUmaBolha() {
    const novaBolhaEl = bolhaEl.cloneNode();
    const posicaoX = Math.random() * getLarguraJanela() + 'px';
    // Math.random() retorna um número aleatório de 0 até 1
    // ... daí multiplicamos esse número pela largura da janela

    novaBolhaEl.style.position = 'fixed';
    novaBolhaEl.style.transition = 'all 4s linear';
    novaBolhaEl.style.top = '-50px';
    novaBolhaEl.style.left = posicaoX;
    novaBolhaEl.style.opacity = 1;
    novaBolhaEl.style.transform = 'scale(' + (Math.random() / 2 + 0.5) + ')';

    document.body.appendChild(novaBolhaEl);

    window.setTimeout(function() {
        novaBolhaEl.style.opacity = .5;
        novaBolhaEl.style.top = window.innerHeight + 'px';
    }, 0);

    // remove o elemento da imagem da bolha assim que sua transição terminar
    (function(oldbolhaEl) {
      function removeElement() {
        oldbolhaEl.removeEventListener('transitionend', removeElement);
        document.body.removeChild(oldbolhaEl);
      }
      oldbolhaEl.addEventListener('transitionend', removeElement);
    }(novaBolhaEl));


    // pelo menos, vai esperar por TEMPO_MINIMO. Mas pode, adicionalmente,
    // esperar por mais [0%....100%] x TEMPO_VARIAVEL
    const proximaBolhaDaqui = TEMPO_MINIMO + Math.random()*TEMPO_VARIAVEL;
    window.setTimeout(criaUmaBolha, proximaBolhaDaqui);
}

criaUmaBolha();
