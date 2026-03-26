const {adicionarProduto, buscarProduto, resetEstoque} = require('../src/estoque');

describe('estoque', () => {
    beforeEach(() => {
        resetEstoque();
    });

    test('adiciona produto ao estoque', () => {
        adicionarProduto('leite', 10);
        const produto = buscarProduto('leite');
        expect(produto).toEqual({ nome: 'leite', quantidade: 10 });
    });

    test('atualiza quantidade de produto existente', () => {
        adicionarProduto('leite', 10);
        adicionarProduto('leite', 5);
        const produto = buscarProduto('leite');
        expect(produto).toEqual({ nome: 'leite', quantidade: 15 });
    });

    test('retorna null para produto não encontrado', () => {
        const produto = buscarProduto('leite');
        expect(produto).toBeNull();
    });
});