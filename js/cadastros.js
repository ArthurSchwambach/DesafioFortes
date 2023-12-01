const ancoras = document.querySelectorAll(".ancora"); // Seleciona todos os elementos com a classe 'ancora'

ancoras.forEach((ancora) => {
  ancora.addEventListener("mouseover", () => {
    ancora.style.transition = "transform 0.3s ease-in-out"; // Adiciona uma transição suave
    ancora.style.transform = "scale(1.1)"; // Aumenta o tamanho em 10%
  });

  ancora.addEventListener("mouseout", () => {
    ancora.style.transform = "scale(1)"; // Retorna ao tamanho original
  });
});

const icons = document.querySelectorAll(".elipseBranca"); // Seleciona todos os elementos com a classe 'elipseBranca'

icons.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.style.transition = "transform 0.3s ease-in-out"; // Adiciona uma transição suave
    icon.style.transform = "scale(1.1)"; // Aumenta o tamanho em 10%
  });

  icon.addEventListener("mouseout", () => {
    icon.style.transform = "scale(1)"; // Retorna ao tamanho original
  });
});
