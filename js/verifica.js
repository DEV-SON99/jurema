// Verifica a URL atual e marca o botão correspondente como ativo
window.onload = function() {
    const path = window.location.pathname;

    if (path.includes("home.html")) {
        document.getElementById("homeButton").classList.add("ativo");
    } else if (path.includes("receitas.html")) {
        document.getElementById("receitasButton").classList.add("ativo");
    } else if (path.includes("cadastro.html")) {
        document.getElementById("cadastroButton").classList.add("ativo");
    }
};
