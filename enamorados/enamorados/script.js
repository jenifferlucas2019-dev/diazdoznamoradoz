        // 1. Interatividade na Galeria (Alerta simples ao clicar na imagem)
        const imagens = document.querySelectorAll('.img-clicavel');
        
        imagens.forEach((img, index) => {
            img.addEventListener('click', () => {
                alert(`Você clicou na imagem ${index + 1}! Descrição: ${img.alt}`);
            });
        });

        // 2. Validação/Intercepção do Formulário
        const formulario = document.getElementById('meuFormulario');
        
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault(); // Evita que a página recarregue
            
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            
            // Exibe uma mensagem de sucesso elegante (pop-up do navegador)
            alert(`Obrigado pelo contato, ${nome}! Nós enviamos uma confirmação para o email: ${email}.`);
            
            formulario.reset(); // Limpa os campos do formulário
        });