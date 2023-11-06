// Função para calcular o dígito verificador (DV)
export function calculaDV(numero: number): number {
    const digitos = numero.toString().split('').map(Number);

    const somaProdutos = digitos[0] * 4 + digitos[1] * 5 + digitos[2] * 6 + digitos[3] * 7;
    const restoDivisao20 = somaProdutos % 20;
    const dv = (restoDivisao20 + 7) % 10;
  
    return dv;
  }
  
  // Função para validar um número XPTO
  export function validaNumeroXpto(numero: number): boolean {

    if (numero < 10004 || numero > 99995) {
      return false;
    }

    const digitos = numero.toString().split('').map(Number);
    const dv = digitos.pop();
    const calculadoDV = calculaDV(parseInt(digitos.join('')));
    return dv === calculadoDV;
  }
  