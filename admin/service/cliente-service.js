const baseUrl = 'http://localhost:3000'
const erroUrl = 'erro.html'

const listaClientes = async () => {
  const resposta = await fetch(`${baseUrl}/profile`)

  if(resposta.ok){
    return resposta.json()
  } 
    throw new Error('Não foi possível criar um cliente')
  
};

const criaCliente = async (nome, email) => {
  const resposta = await fetch(`${baseUrl}/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  });
  if(resposta.ok){
    return resposta.json()
  } 
    throw new Error('Não foi possível criar um cliente')
}

const excluirCliente = async (id) => {
  const resposta = await fetch(`${baseUrl}/profile/${id}`, {
    method: "DELETE"})
    if(resposta.ok){
      return resposta
    } 
      throw new Error('Não foi possível criar um cliente')
}
  
const detalhaCliente = async (id) => {
  const resposta = await fetch(`${baseUrl}/profile/${id}`);
  return await resposta.json();
}
  
const atualizarCliente = async (id, nome, email) => {
  const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  });

  if(resposta.ok){
    return resposta.json()
  } 
    throw new Error('Não foi possível criar um cliente')
}

export const clienteService = {
  listaClientes,
  criaCliente,
  excluirCliente,
  detalhaCliente,
  atualizarCliente,
  erroUrl
}
