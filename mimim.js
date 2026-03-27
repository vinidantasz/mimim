<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Mensagem Secreta Animada</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(135deg, #ff9a9e, #fad0c4);
      font-family: Arial, sans-serif;
      margin: 0;
    }

    .container {
      background-color: rgba(255, 255, 255, 0.95);
      padding: 40px;
      border-radius: 15px;
      text-align: center;
      box-shadow: 0 8px 20px rgba(0,0,0,0.2);
      position: relative;
    }

    input[type="password"] {
      padding: 10px;
      font-size: 16px;
      border-radius: 8px;
      border: 1px solid #ccc;
      width: 200px;
      margin-bottom: 20px;
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 8px;
      border: none;
      background-color: #ff6b81;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #ff4757;
    }

    .mensagem {
      margin-top: 20px;
      font-size: 28px;
      color: #ff2d95;
      font-weight: bold;
      opacity: 0;
      transition: opacity 0.5s;
      position: relative;
    }

    .mensagem.show {
      opacity: 1;
    }

    /* Coração pulando */
    .heart {
      position: absolute;
      font-size: 50px;
      color: #ff2d95;
      animation: pulse 1s infinite;
      left: 50%;
      transform: translateX(-50%);
      top: -80px;
      opacity: 0;
      transition: opacity 0.5s;
    }

    .heart.show {
      opacity: 1;
    }

    @keyframes pulse {
      0% { transform: translateX(-50%) scale(1); }
      50% { transform: translateX(-50%) scale(1.3); }
      100% { transform: translateX(-50%) scale(1); }
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Digite a senha</h2>
    <input type="password" id="senha" placeholder="Senha secreta">
    <br>
    <button id="btnEnviar">Enviar</button>
    <div class="mensagem" id="mensagem"></div>
    <div class="heart" id="heart">💖</div>
  </div>

  <script>
    const senhaCorreta = "mimim";
    const btnEnviar = document.getElementById("btnEnviar");
    const mensagem = document.getElementById("mensagem");
    const inputSenha = document.getElementById("senha");
    const heart = document.getElementById("heart");

    btnEnviar.addEventListener("click", () => {
      if(inputSenha.value === senhaCorreta) {
        mensagem.textContent = "Parabéns pela promoção lindinha! 💖";
        heart.classList.add("show");
      } else {
        mensagem.textContent = "Senha incorreta 😢";
        heart.classList.remove("show");
      }
      mensagem.classList.add("show");
    });

    // Permite pressionar Enter para enviar
    inputSenha.addEventListener("keyup", (event) => {
      if(event.key === "Enter") {
        btnEnviar.click();
      }
    });
  </script>
</body>
</html>