# doguito-crud

### 📌 Guia
 1. [Visão geral](#visao-geral)
 2. [Iniciando o projeto](#inicio-proj)

<div id='visao-geral'/>  

## 👁️ Visão geral
>**Note**: Este projeto foi executado na durante capacitação Full-Stack do Projeto Desenvolve, oferecido pelo Grupo Boticário em parceria com a Alura.

O Doguito CRUD foi um projeto realizado no curso "JS na web: CRUD com JavaScript Assíncrono", orientado pelo instrutor Felipe Nascimento, disponibilizado pela Alura. 

Sua proposta é ser uma API de gerenciamento dos clientes do Doguito Petshop. Nela deve ser possível adicionar, visualizar, editar e deletar perfis de clientes, ou seja permitir operações CRUD - Create, Read, Update, Delete. Seu servidor é simulado por meio da biblioteca json-server.

O HTML e o CSS foi fornecido no início do curso, para em cima dele, ser desenvolvida a programação das funcionalidades. Nessa aplicação, o projeto posssui telas relacionadas às ações necessárias e a uma situação de erro:

![start-doguito-CRUD](https://github.com/emararipe/doguito-crud/assets/115882935/0fd3b7e6-bc23-429d-921c-a3ddf16310af)  

 A tela principal/inicial do projeto é a ``lista_cliente.html``, nela podemos **visualizar** os clientes cadastrados, contidos em uma tabela estilizada:

![overview-doguito-CRUD](https://github.com/emararipe/doguito-crud/assets/115882935/790715f4-cc07-4a8a-aac1-02cde4459d58)

A partir da tela incial, podemos acessar a tela ``cadastra_cliente.html`` pode-se criar novos clientes, sendo que cada cliente corresponde a uma linha da tabela e dentro de cada linha estão contidas colunas com os campos *nome*, *email* e as opções *deletar* e *editar* :

![create-doguito-CRUD](https://github.com/emararipe/doguito-crud/assets/115882935/6bba0e4d-87bb-4794-9ad0-1be27e92830d)

Ou editar clientes existentes acessando ``edita_cliente.html?<id=n>``:

![edit-doguito-CRUD](https://github.com/emararipe/doguito-crud/assets/115882935/63093a63-7a07-44cc-9514-df4b11bd055f)

Em caso de operação bem sucedida, ambas vão redirecionar o usuário para uma tela de aviso de sucesso.

![sucess-doguito-CRUD](https://github.com/emararipe/doguito-crud/assets/115882935/c3ae4eff-b589-4c0f-ba89-f1960c121121)

Ao longo do densenvolvimento do código, as funções foram separadas entre aquelas que lidavam com as **requisições HTTP** - na pasta ``service`` e aquelas que lidavam com a **manipulação dos dados** dos clientes, na pasta ``controller``.

<div id='inicio-proj'/> 

## 🏁 Iniciando o projeto
Para começar, vamos usar requisições http para manipular nosso "banco de dados" em ``db.json``, porém, como estamos simulando um servidor, precisamos instalar o json-server:
```
npm install -g json-server
```
Uma vez instalado no modo global(``-g``) podemos inicializar o json-server e estabelecer a conexão cliente-servidor:
```
json-server --watch db.json
```
Mas caso você não queira instalar o json-server globalmente, basta retirar o ``-g`` no momento de instalação e fazer e passar o comando de inicialização começando com ``npx``.

---
> **Warning**: *Em construção*...

---



abrir a pasta admin no vscode e 
rodar o json server: 
```js
json-server --watch db.json
```

Rodar: browser-sync start --server --file . --host --port 5000 --startPath admin/telas/lista_cliente.html
