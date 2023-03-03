# Specification Based Test

Consiste em derivar casos de testes com base na especificacao.

## Especificacao:
Dado o ID de um restaurante precisamos retornar as formas de pagamento que o usuario em questao aceita e que tambem sao permitidas pelo restaurante.
O restaurante aceita visa, master, elo, dinheiro, paypal

### Testes baseados na especificacao
Combinacao:
  usuario visa, master e restaurante aceita visa, master
  usuaria visa, master e restaurente aceita visa
  usuario elo e restaurante aceita master

Questoes:
- Quanto mais combinacao testada maior eh a possibilidade de encontrar bugs.
- Talvez voce derive muitas combinacoes possiveis, mas na hora de escrever o codigo voce deve avaliar se o teste realmente faz sentido
- Isso ajuda na hora de escrever o codigo, maximiza a chance de encontrar bug.

# Boundary Testing

O boundary testing consiste em dar limites. Por exemplo:

```js
// Eu tenho a seguinte classe com o metodo:

class AgeValidator {
  isValid (age, greatherThan) {
    return age >= greatherThan
  }
}

new AgeValidator.isValid(AGE, 18)
```

O primeiro passo do boundary eh adicionar um limite exato, nesse caso o limite exato seria 18, ou seja, a condicao retornaria true ja que o age eh o mesmo que o greatherThan.
Esse limite chamamos de in point

O segundo passo eh adicionar um limite que voce sabe que a condicao retornara false, nessa caso seria 17.
Chamamos de off point

O terceiro passo eh o in points, ou seja, todos os numeros que podem retornar true

E o quarto passo eh o off points que seria todos os numeros que podem retornar false


