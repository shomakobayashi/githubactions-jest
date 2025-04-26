import { add, subtract, multiply, divide } from './calculator';

describe('Calculator', () => {
  test('2つの数値を足し算できる', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(5, -3)).toBe(2);
  });

  test('2つの数値を引き算できる', () => {
    expect(subtract(5, 2)).toBe(3);
    expect(subtract(5, -3)).toBe(8);
  });

  test('2つの数値を掛け算できる', () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(3, -4)).toBe(-12);
  });

  test('2つの数値を割り算できる', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(10, -2)).toBe(-5);
  });

  test('0で割ろうとするとエラーになる', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
  });
});
