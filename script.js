document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links de navegação
    const navLinks = document.querySelectorAll('nav a');

    // Adiciona um evento de clique para cada link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previne o comportamento padrão de "pular" para a âncora
            e.preventDefault();

            // Pega o ID da seção alvo (ex: '#componentes')
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Verifica se a seção alvo existe
            if (targetSection) {
                // Rola a página suavemente até a seção
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Ajuste para o cabeçalho não cobrir o título
                    behavior: 'smooth'
                });
            }
        });
    });
});