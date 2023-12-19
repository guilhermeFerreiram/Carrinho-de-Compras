function adicionar(){
    let formulario = document.querySelector(".produto-input");
    let produtoSelecionado = formulario.value;
    let quantidade = document.getElementById("quantidade").value;

    let parte = produtoSelecionado.split(" - R$");
    let nome = parte[0];
    let preco = parseFloat(parte[1]);
    
    let listaProdutos = document.getElementById("lista-produtos");
    let produtoAdicionado = document.createElement("section");
    produtoAdicionado.classList.add("carrinho__produtos__produto");

    let spanQuantidade = document.createElement("span");
    spanQuantidade.classList.add("texto-azul");
    spanQuantidade.innerHTML = quantidade + "x";
    let spanPreco = document.createElement("span");
    spanPreco.classList.add("texto-azul");
    spanPreco.innerHTML = "R$" + preco * quantidade;
    let textNome = document.createTextNode(" " + nome + " ");

    produtoAdicionado.appendChild(spanQuantidade);
    produtoAdicionado.appendChild(textNome);
    produtoAdicionado.appendChild(spanPreco);

    listaProdutos.appendChild(produtoAdicionado);

    let valorTotal = document.getElementById("valor-total");
    valorTotal.textContent = "R$" + (parseFloat(valorTotal.textContent.replace("R$", "")) + preco * quantidade).toString();
}

function limpar(){
    let listaProdutos = document.getElementById("lista-produtos");
    listaProdutos.innerHTML = "";

    let valorTotal = document.getElementById("valor-total");
    valorTotal.textContent = "R$0";
}