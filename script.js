// Simulação de pessoas online
let onlineCount = 0;

// Função para atualizar o número de pessoas online
function updateOnlineCount() {
    onlineCount = Math.floor(Math.random() * 100); // Gera um número aleatório entre 0 e 99
    document.getElementById('online-count').textContent = onlineCount;
}

// Atualiza o número a cada 5 segundos
setInterval(updateOnlineCount, 5000);

// Inicializa o contador na primeira execução
updateOnlineCount();
