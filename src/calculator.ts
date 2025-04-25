// src/calculator.ts
export class Calculator {
    /**
     * 2つの数値を足し算します
     */
    add(a: number, b: number): number {
      return a + b;
    }
  
    /**
     * 2つの数値の引き算を行います
     */
    subtract(a: number, b: number): number {
      return a - b;
    }
  
    /**
     * 2つの数値の掛け算を行います
     */
    multiply(a: number, b: number): number {
      return a * b;
    }
  
    /**
     * 2つの数値の割り算を行います
     * @throws {Error} 0で割ろうとした場合
     */
    divide(a: number, b: number): number {
      if (b === 0) {
        throw new Error('Division by zero is not allowed');
      }
      return a / b;
    }
  
    /**
     * 数値を2乗します
     */
    square(a: number): number {
      return a * a;
    }
  
    /**
     * 数値の平方根を計算します
     * @throws {Error} 負の数の平方根を計算しようとした場合
     */
    squareRoot(a: number): number {
      if (a < 0) {
        throw new Error('Cannot calculate square root of negative number');
      }
      return Math.sqrt(a);
    }
  }