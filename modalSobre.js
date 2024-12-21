// Seleciona os elementos
const modal = document.getElementById('modal-sobre');
const btnSobre = document.getElementById('btn-sobre');
const btnFechar = document.getElementById('btn-fechar');

// Abre o modal ao clicar no botão
btnSobre.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Fecha o modal ao clicar no botão de fechar
btnFechar.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fecha o modal ao pressionar a tecla ESC
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.style.display = 'none';
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal-sobre");
    const closeModalButton = document.getElementById("btn-fechar");
  
    // Exemplo de como abrir a modal (pode personalizar conforme seu site)
    document.querySelector(".btn-modern").addEventListener("click", () => {
      modal.style.display = "block";
    });
  
    // Fechar modal ao clicar no "X"
    closeModalButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Fechar modal ao clicar fora do conteúdo
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  
    // Fechar modal ao pressionar "Esc"
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        modal.style.display = "none";
      }
    });
  });
  