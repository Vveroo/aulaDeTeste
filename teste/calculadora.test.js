const { somar, subtrair, multiplicar, dividir, modulo, exponenciar } = require('../src/calculadora');

describe('Calculadora', () => {
    test('soma 2 + 3 = 5', () => {
        expect(somar(2, 3)).toBe(5);
    });

    test('subtrair 5 - 2 = 3', () => {
        expect(subtrair(5, 2)).toBe(3);
    });

    test('multiplicar 4 * 3 = 12', () => {
        expect(multiplicar(4, 3)).toBe(12);
    }); 

    test('dividir 10 / 2 = 5', () => {
        expect(dividir(10, 2)).toBe(5);
    });

    test('dividir por zero lança erro', () => {
        expect(() => dividir(10, 0)).toThrow("Divisão por zero não é permitida.");
    });

    test('modulo 10 % 3 = 1', () => {
        expect(modulo(10, 3)).toBe(1);
    });

    test('modulo por zero lança erro', () => {
        expect(() => modulo(10, 0)).toThrow("Divisão por zero não é permitida.");
    }); 

    test('exponenciar 2 ** 3 = 8', () => {
        expect(exponenciar(2, 3)).toBe(8);
    });
});