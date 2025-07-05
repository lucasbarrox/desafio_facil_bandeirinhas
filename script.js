document.addEventListener('DOMContentLoaded', function() {
    // Definindo os elementos do DOM
    const numeroBandeirinhas = document.getElementById('numero-bandeirinhas');
    const gerarBtn = document.getElementById('gerar-btn');
    const bandeirinhasContainer = document.getElementById('bandeirinhas-container');
    
    // Cores das bandeirinhas
    const cores = [
        '#FF6B35', // Laranja
        '#4CB944', // Verde
        '#FFD166', // Amarelo
        '#F72585', // Rosa
        '#3A86FF'  // Azul
    ];
    
    // Função que gera as bandeirinhas
    function gerarBandeirinhas() {
        // Limpa o container de bandeirinhas
        bandeirinhasContainer.innerHTML = '';
        
        // pega o numero de bandeirinhas
        const numero = parseInt(numeroBandeirinhas.value);
        
        // Valida o número
        if (isNaN(numero) || numero <= 0 || numero > 50) {
            alert('Por favor, digite um número válido entre 1 e 50.');
            return;
        }
        
        // Cria as bandeirinhas
        for (let i = 0; i < numero; i++) {
            // Cria o elemento bandeirinha
            const bandeirinha = document.createElement('div');
            bandeirinha.className = 'bandeirinha';
            
            // Define cor da bandeirinha
            const corIndex = i % cores.length;
            bandeirinha.style.borderBottomColor = cores[corIndex];
            
            // Coloca a bandeirinha no container
            bandeirinhasContainer.appendChild(bandeirinha);
        }
        
        // Animação simples
        bandeirinhasContainer.style.animation = 'none';
        setTimeout(() => {
            bandeirinhasContainer.style.animation = 'fadeIn 0.5s ease-in-out';
        }, 10);
    }
    
    // Adiciona o clique no botão
    gerarBtn.addEventListener('click', gerarBandeirinhas);
    
    // Gera bandeira ao apertar enter
    numeroBandeirinhas.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            gerarBandeirinhas();
        }
    });
});

// Animação fade in
document.head.insertAdjacentHTML('beforeend', `
    <style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
`);
