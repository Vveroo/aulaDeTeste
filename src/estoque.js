let produtos = [];

function adicionarProduto(nome, quantidade) {
    const produtoExistente = produtos.find(p => p.nome === nome)|| null;
    if (produtoExistente) {
        produtoExistente.quantidade += quantidade;
    } else {
        produtos.push({ nome, quantidade });
    }
}

function buscarProduto(nome) {
    return produtos.find(p => p.nome === nome)|| null;
}

function resetEstoque() {
    produtos = [];
}

module.exports = {adicionarProduto, buscarProduto, resetEstoque};