document.addEventListener('DOMContentLoaded', function() {
  var soundEntity = document.getElementById('sound-entity');
  var musicControlButton = document.getElementById('music-control');

  musicControlButton.addEventListener('click', function() {
    var audioContext = new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
    if (soundEntity.components.sound.isPlaying) {
      soundEntity.components.sound.pauseSound();
      musicControlButton.textContent = 'Play';
    } else {
      soundEntity.components.sound.playSound();
      musicControlButton.textContent = 'Pause';
    }
  });

  document.getElementById('show-instructions').addEventListener('click', function() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('instrucoes').style.display = 'flex';
  });

  document.getElementById('show-about').addEventListener('click', function() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('sobre').style.display = 'flex';
  });

  document.getElementById('back-to-menu-instrucoes').addEventListener('click', function() {
    document.getElementById('instrucoes').style.display = 'none';
    document.getElementById('menu').style.display = 'flex';
  });

  document.getElementById('back-to-menu-sobre').addEventListener('click', function() {
    document.getElementById('sobre').style.display = 'none';
    document.getElementById('menu').style.display = 'flex';
  });

  document.getElementById('start-game').addEventListener('click', function() {
    document.getElementById('menu').style.display = 'none';
    // Iniciar o jogo - adicione aqui o código para iniciar o jogo
  });

  // Criar efeito de neve
  var snowContainer = document.querySelector('.snow');

  function createSnowflake() {
    var snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 7 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    snowContainer.appendChild(snowflake);

    setTimeout(() => {
      snowflake.remove();
    }, 10000);
  }

  setInterval(createSnowflake, 200);
});
