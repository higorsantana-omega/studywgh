/**
 *  Obter usuario
 *  Obter número de tel apartir de ID
 *  Obter endereço pelo id
 */

function obterUsuario(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      nome: "Higor",
      dataNasc: new Date(),
    });
  }, 1000);
}

function obterTelefone(idUsuario) {}

function obterEndereco(idUsuario) {
  setTimeout(() => {
    return {
      telefone: "0000001",
      ddd: 11,
    };
  }, 2000);
}

function resolverUsuario(erro, usuario) {
console.log("usuario: ", usuario);
    
}

obterUsuario(resolverUsuario);
const telefone = obterTelefone(usuario.id);

console.log("telefone: ", telefone);
