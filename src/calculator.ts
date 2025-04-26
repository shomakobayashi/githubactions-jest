/**
 * 2つの数値を足し算します
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * 2つの数値の引き算を行います
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * 2つの数値の掛け算を行います
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * 2つの数値の割り算を行います
 * @throws {Error} 0で割ろうとした場合
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}
