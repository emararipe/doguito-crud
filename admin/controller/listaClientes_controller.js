import { clienteService } from "../service/cliente-service.js";

function criaNovoCliente(nome, email, id) {
  const novoCliente = document.createElement("tr");
  try {
    const conteudo = `
      <td class="td" data-td>${nome}</td>
      <td>${email}</td>
      <td>
        <ul class="tabela__botoes-controle">
          <l><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
          <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
      </td> 
    `;
    novoCliente.innerHTML = conteudo;
    novoCliente.dataset.id = id;

    return novoCliente;
  } catch(erro){
    console.log(erro)
    window.location.href = clienteService.erroUrl
  } 
}

const tabelaClientes = document.querySelector("[data-tabela]");

const render = async () => {
  const clienteServ = await clienteService.listaClientes();

  try {
    clienteServ.forEach((elemento) => {
      tabelaClientes.appendChild(
        criaNovoCliente(elemento.nome, elemento.email, elemento.id)
      );
    })
  } catch(erro){
    console.log(erro)
    window.location.href = clienteService.erroUrl
  } 
};

render();

tabelaClientes.addEventListener("click", (evento) => {
  let botaoExcluir =
    evento.target.className === "botao-simples botao-simples--excluir";
  if (botaoExcluir) {
    try {
    const linhaCliente = evento.target.closest("[data-id]");
    let id = linhaCliente.dataset.id;
    clienteService.excluirCliente(id);
    } catch(erro){
      console.log(erro)
      window.location.href = clienteService.erroUrl
    }
  }
});
