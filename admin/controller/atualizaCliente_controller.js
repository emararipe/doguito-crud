import { clienteService } from "../service/cliente-service.js";

(async () => {
  const pegaURL = new URL(window.location);

  const id = pegaURL.searchParams.get("id");

  const nome = document.querySelector("[data-nome]");
  const email = document.querySelector("[data-email]");
  try {
  const elemento = await clienteService.detalhaCliente(id);
  nome.value = elemento.nome;
  email.value = elemento.email;
  } catch(erro){
    console.log(erro)
    window.location.href = clienteService.erroUrl
  } 

  const formulario = document.querySelector("[data-form]");

  formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    try {
      await clienteService.atualizarCliente(id, nome.value, email.value);
      window.location.href = "../telas/edicao_concluida.html";
    } catch(erro){
      console.log(erro)
      window.location.href = clienteService.erroUrl
    } 
  });
})()
