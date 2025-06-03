    let numeroSecreto;
    let tentativas = 0;
    let contagem = [];

    const tentarAdivinhar = document.getElementById("tentarAdivinhar");
    const botaoTentativa = document.getElementById("botaoTentativa");
    const botaoReset = document.getElementById("botaoReset");
    const feedback = document.getElementById("feedback");
    const mostrarTentativas = document.getElementById("tentativas");
    const mostrarContagem = document.getElementById("contar");

    function generateNumber() {
      numeroSecreto = Math.floor(Math.random() * 100) + 1;
      tentativas = 0;
      contagem = [];
      feedback.textContent = "";
      mostrarTentativas.textContent = "";
      mostrarContagem.textContent = "0";
      tentarAdivinhar.disabled = false;
      botaoTentativa.disabled = false;
      tentarAdivinhar.value = "";
      tentarAdivinhar.focus();
    }

    botaoTentativa.addEventListener("click", () => {
      const guess = Number(tentarAdivinhar.value);
      if (!guess || guess < 1 || guess > 100) {
        feedback.textContent = "Bob Esponja disse: Digite um número válido entre 1 e 100!";
        return;
      }

      tentativas++;
      contagem.push(guess);
      mostrarTentativas.textContent = contagem.join(", ");
      mostrarContagem.textContent = tentativas;

      if (guess === numeroSecreto) {
        feedback.textContent = "Gary está feliz! Você acertou! O número era " + numeroSecreto;
        tentarAdivinhar.disabled = true;
        botaoTentativa.disabled = true;
        document.getElementById("som").play();
        return;
      } else if (tentativas >= 10) {
        feedback.textContent = "O Lula Molusco cansou! Fim de jogo! O número era " + numeroSecreto;
        tentarAdivinhar.disabled = true;
        botaoTentativa.disabled = true;
      } else if (guess < numeroSecreto) {
        feedback.textContent = "Hmm... Bob Esponja diz: Tente um número maior!";
      } else {
        feedback.textContent = "Patrick diz: Número menor, amigo!";
      }

      tentarAdivinhar.value = "";
      tentarAdivinhar.focus();
    });

    botaoReset.addEventListener("click", generateNumber);

    generateNumber();