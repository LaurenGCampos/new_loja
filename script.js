document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("auth-form");
  const title = document.getElementById("form-title");
  const toggleLink = document.getElementById("toggle-link");
  const toggleText = document.getElementById("toggle-text");

  let isLogin = true;

  if (toggleLink) {
    toggleLink.addEventListener("click", (e) => {
      e.preventDefault();
      isLogin = !isLogin;

      if (!isLogin) {
        title.textContent = "Cadastrar";
        form.querySelector("button").textContent = "Criar Conta";
        toggleText.innerHTML = `Já tem conta? <a href="#" id="toggle-link">Entrar</a>`;
      } else {
        title.textContent = "Entrar";
        form.querySelector("button").textContent = "Entrar";
        toggleText.innerHTML = `Ainda não tem conta? <a href="#" id="toggle-link">Cadastre-se</a>`;
      }
    });
  }

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(isLogin ? "Login realizado com sucesso!" : "Cadastro criado com sucesso!");
    if (isLogin) window.location.href = "dashboard.html";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("vendasChart");
  if (ctx) {
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        datasets: [{
          label: "Vendas (R$)",
          data: [2500, 3100, 4200, 3800, 4600, 5100],
          borderColor: "#ff5a00",
          backgroundColor: "rgba(255,90,0,0.1)",
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const checkoutForm = document.getElementById("checkout-form");

  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Pagamento confirmado! 🎉 Seu acesso ao curso foi liberado.");
      window.location.href = "dashboard.html";
    });
  }
});

