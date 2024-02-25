/* 
O IEEE 754 é um padrão de representação númerica.

Como um número é armazenado em javascript?
No javascript ele é escrito em 64 bits
No primeiro bit nós temos um sinal (sign), ele nos indica se um número é positivo ou negativo.

11 bit de expoente, ele indica a ordem de grandeza do número. Para ver a ordem de grandeza no javascript, podemos fazer o uso do toExponential()

E os outros 52 bit nós chamamos de fração, que é onde nos expressamos o número em sí
*/

const num = 10;
console.log(num.toExponential());
