document.addEventListener("DOMContentLoaded", function() {
    const table = document.querySelector("tbody");
    const btn_Adicionar = document.getElementById("adicionarLivro");
    const btn_Atualizar = document.getElementById("atualizarLivro");

    let editando;

    btn_Adicionar.addEventListener("click", function (e) {
        let nome = document.getElementById("nome").value;
        let autor = document.getElementById("autor").value;
        let genero = document.getElementById("genero").value;

        if (nome && autor && genero){
            let linha = table.insertRow();
            linha.innerHTML = `
                <td class="nome">${nome}</td>
                <td class="autor">${autor}</td>
                <td class="genero">${genero}</td>
                <td> 
                    <button class="btn-Edita">Editar</button>
                    <button class="btn-Deleta">Deletar</button>
                </td>
            `;
            document.getElementById("nome").value = "";
            document.getElementById("autor").value = "";
            document.getElementById("genero").value = "";   
        }
    })
    
    table.addEventListener("click", function(e) {
        let linha = e.target.closest("tr");
        if (e.target.classList.contains("btn-Deleta")){
            table.removeChild(linha);
        } else if (e.target.classList.contains("btn-Edita")) {
            document.getElementById("nome").value = linha.querySelector(".nome").textContent;
            document.getElementById("autor").value = linha.querySelector(".autor").textContent;
            document.getElementById("genero").value = linha.querySelector(".genero").textContent;
            editando = linha;
            btn_Adicionar.style.display = "none";
            btn_Atualizar.style.display = "block";
        }
    })

    btn_Atualizar.addEventListener("click", function(e) {
        let nome = document.getElementById("nome").value;
        let autor = document.getElementById("autor").value;
        let genero = document.getElementById("genero").value;

        if (nome && autor && genero) {
            editando.querySelector(".nome").textContent = nome;
            editando.querySelector(".autor").textContent = autor;
            editando.querySelector(".genero").textContent = genero;
    
            document.getElementById("nome").value = "";
            document.getElementById("autor").value = "";
            document.getElementById("genero").value = "";
    
            btn_Adicionar.style.display = "block";
            btn_Atualizar.style.display = "none";
            editando = null;
        }
    })
})