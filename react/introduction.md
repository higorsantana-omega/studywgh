# Introduction

## Framework ou biblioteca

O React ele e uma biblioteca, ele apenas cuida da renderizacao da UI. Mas com o advento de diversas outras libs que compoe o ecossistema do React, podemos dizer que eh um framework. O React nao sabe a onde ele vai ser renderizado, por isso temos esses 3 caras: ReactDOM (aplicacoes web), React Native (aplicacoes mobile) e React Native Windows (para apps windows).

## Virtual DOM

Todo o conteudo de uma pagina esta salvo em algum arquivo HTML, e esse arquivo HTML esta salvo em algum dispositivo de armazenamento. O React surgiu com a proposta de fazer uma copia da DOM, e ao inves de rodar ela em algum dispositivo de armazenamento ela roda na memoria ram. Isso faz com que qualquer alteracao feita seja muito mais veloz. E toda alteracao feita ela apenas surte o efeito na Virtual Dom que esta rodando na memoria ram e nao na DOM.

Mas, para fazer com que as coisas ocorram na DOM, o React ele faz um processo chamado "Reconciliation", que e basicamente uma sincronizacao dos dados entre a Virtual DOM e a DOM.

## Transpilers

Os browers nao suportam jsx, entao para que uma aplicacao rode no navegador ocorre um processo de transpilacao. Por exemplo o babel, o babel vai pegar o codigo da forma que foi escrito e vai transformar em um codigo que o navegador entende. Outro item importante e o webpack, ele que da a funcao do javascript importar arquivos de imagem e arquivos css e o webpack tem a funcao de gerar um bundler. O bundler nada mais eh que juntar todos os arquivos js e transformar em um unico arquivo js

## Componentizacao

O React ele usa o modo declarativo ao escrever os components. O modo declarativo a gente nao precisa especificar como deve ser feito, apenas definimos o que queremos. Ex:

```jsx
function Text() {
  return (
    <h1>Hello</h1>
  )
}
```

No modo imperativo descrevemos especificamente o que queremos e o que deve ser feito. Ex:

```js 
const h1 = document.createElement('h1')
h1.innerText = 'Hello'
document.body.appendChild(h1)
```

Com a componentizacao consegueguimos separar a nossa estrutura, isso faz com que aumente a produtividade ao codificar.
