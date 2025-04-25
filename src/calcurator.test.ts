// src/calculator.test.ts
import { Calculator } from './calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('正の数同士を足し算できる', () => {
      expect(calculator.add(1, 2)).toBe(3);
    });

    test('正の数と負の数を足し算できる', () => {
      expect(calculator.add(5, -3)).toBe(2);
    });

    test('負の数同士を足し算できる', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });
  });

  describe('subtract', () => {
    test('正の数から正の数を引き算できる', () => {
      expect(calculator.subtract(5, 2)).toBe(3);
    });

    test('正の数から負の数を引き算できる', () => {
      expect(calculator.subtract(5, -3)).toBe(8);
    });

    test('負の数から正の数を引き算できる', () => {
      expect(calculator.subtract(-5, 3)).toBe(-8);
    });
  });

  describe('multiply', () => {
    test('正の数同士を掛け算できる', () => {
      expect(calculator.multiply(3, 4)).toBe(12);
    });

    test('正の数と負の数を掛け算できる', () => {
      expect(calculator.multiply(3, -4)).toBe(-12);
    });

    test('負の数同士を掛け算できる', () => {
      expect(calculator.multiply(-3, -4)).toBe(12);
    });

    test('0との掛け算は0になる', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('正の数同士を割り算できる', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('正の数を負の数で割り算できる', () => {
      expect(calculator.divide(10, -2)).toBe(-5);
    });

    test('0で割ろうとするとエラーになる', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('square', () => {
    test('正の数の2乗を計算できる', () => {
      expect(calculator.square(4)).toBe(16);
    });

    test('負の数の2乗を計算できる', () => {
      expect(calculator.square(-4)).toBe(16);
    });

    test('0の2乗は0になる', () => {
      expect(calculator.square(0)).toBe(0);
    });
  });

  describe('squareRoot', () => {
    test('正の数の平方根を計算できる', () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });

    test('0の平方根は0になる', () => {
      expect(calculator.squareRoot(0)).toBe(0);
    });

    test('負の数の平方根を計算しようとするとエラーになる', () => {
      expect(() => calculator.squareRoot(-1)).toThrow('Cannot calculate square root of negative number');
    });
  });
});