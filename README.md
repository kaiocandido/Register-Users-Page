# Cadastro de Usuários

Este projeto é uma aplicação web simples para cadastro de usuários e visualização dos cadastrados. A interface permite a inserção de dados como e-mail, nome e idade, e gera um ID aleatório para cada usuário. Também oferece uma funcionalidade para listar todos os usuários cadastrados por meio de uma API.

## Funcionalidades

- **Cadastro de Usuários**: Insira e-mail, nome e idade para cadastrar um novo usuário. O sistema gera automaticamente um ID aleatório.
- **Listar Usuários**: Visualize a lista de todos os usuários cadastrados por meio de uma API.

## Requisitos

- Node.js (com npm ou yarn)
- Um servidor para a API (pode ser local ou remoto)

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/kaiocandido/Register-Users-Page.git
    ```

2. Instale as dependências:

    API BACKEND:

    ```bash
    git clone https://github.com/kaiocandido/Node-Backend-Usuarios.git
    ```

## Estrutura da Página

A aplicação possui duas principais funcionalidades na interface:

### Cadastrar Usuário

- **Campos**: e-mail, nome, idade
- **Botão**: "Cadastrar"
- Ao clicar em "Cadastrar", os dados são enviados para a API e um ID aleatório é gerado automaticamente para o usuário.

### Listar Usuários

- **Botão**: "Listar Usuários"
- Ao clicar em "Listar Usuários", uma chamada é feita à API para recuperar e exibir todos os usuários cadastrados.

## API

### Endpoints

#### POST /usuarios

Cadastra um novo usuário.

**Corpo da Requisição:**

```json
{
  "email": "usuario@exemplo.com",
  "nome": "Nome do Usuário",
  "idade": 30
}


Resposta:

{
  "id": "id-aleatorio",
  "email": "usuario@exemplo.com",
  "nome": "Nome do Usuário",
  "idade": 30
}


GET /usuarios
Lista todos os usuários cadastrados.

Resposta:

json

[
  {
    "id": "id-aleatorio",
    "email": "usuario@exemplo.com",
    "nome": "Nome do Usuário",
    "idade": 30
  }
]



