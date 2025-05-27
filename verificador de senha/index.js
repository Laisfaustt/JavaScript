function verificarSenha() {
      const senha = document.getElementById("senha").value;
      const resultado = document.getElementById("resultado");

      let forca = 0;
      if (senha.length >= 8) forca++;
      if (/[a-z]/.test(senha) && /[A-Z]/.test(senha)) forca++;
      if (/[0-9]/.test(senha)) forca++;
      if (/[^a-zA-Z0-9]/.test(senha)) forca++;

      if (senha.length === 0) {
        resultado.textContent = "";
        resultado.className = "forca";
      } else if (forca <= 1) {
        resultado.textContent = "Senha Fraca";
        resultado.className = "forca fraca";
      } else if (forca === 2 || forca === 3) {
        resultado.textContent = "Senha Média";
        resultado.className = "forca media";
      } else if (forca === 4) {
        resultado.textContent = "Senha Forte";
        resultado.className = "forca forte";
      }
    }