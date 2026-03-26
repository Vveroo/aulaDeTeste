const {validarEmail, criarUsuario} = require('../src/usuario');

describe('validarEmail', () => {
    test('aceita email válido', () => {
        expect(validarEmail('ana@gmail.com')).toBe(true);
    });

    test('rejeita email inválido', () => {
        expect(validarEmail('anagmail.com')).toBe(false);
    });
});

describe('criarUsuario', () => {
    test('cria usuário com email válido', () => {
        const usuario = criarUsuario('Ana', 'ana@gmail.com', '123456');
        expect(usuario).toHaveProperty('id');
        expect(usuario.nome).toBe('Ana');
        expect(usuario.email).toBe('ana@gmail.com');
        expect(usuario.ativo).toBe(true);
        expect(usuario.criadoEm).toBeInstanceOf(Date);
        expect(usuario.senha).toBe('123456');
    });

    test('lança erro para email inválido', () => {
        expect(() => criarUsuario('Ana', 'anagmail.com', '123456')).toThrow('Email inválido');
    });
});