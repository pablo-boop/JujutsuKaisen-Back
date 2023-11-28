# Documentação do Projeto

Este projeto consiste em duas partes: uma API para gerenciar cartas (`Cards API`) e outra para gerenciar estudantes (`Students API`). Ambas as APIs seguem uma estrutura similar, com operações CRUD (Create, Read, Update, Delete) para suas respectivas entidades.

## Estrutura do Projeto

1. **API de Cartas (`Cards API`):**
    - `models/Cards/Cards.js`: Módulo que contém as classes `Card` e `CardList` para representar cartas e listas de cartas, respectivamente.
    - `controllers/cardsController.js`: Controladores para manipular operações CRUD em cartas.
    - `routes/cards.routes.js`: Roteador que define as rotas para as operações de cartas.
    
2. **API de Estudantes (`Students API`):**
    - `models/Students/Students.js`: Módulo que contém as classes `Student` e `StudentList` para representar estudantes e listas de estudantes, respectivamente.
    - `controllers/studentsController.js`: Controladores para manipular operações CRUD em estudantes.
    - `routes/students.routes.js`: Roteador que define as rotas para as operações de estudantes.
    
3. **Roteador Principal (`index.js`):**
    - `routes/index.js`: Roteador principal que agrupa os roteadores de `Cards API` e `Students API` e define uma rota de boas-vindas para a API.

## Configuração e Instalação

1. **Clonar o Repositório:**
    ```bash
    git clone https://seu-repositorio.git
    cd seu-repositorio
    ```

2. **Instalar Dependências:**
    ```bash
    npm install
    ```

3. **Iniciar o Servidor:**
    ```bash
    npm start
    ```

## Operações CRUD

### API de Cartas (`Cards API`)

#### 1. Obter Todas as Cartas
   - **Rota:** `GET /cards/`
   - **Descrição:** Retorna todas as cartas cadastradas.
   - **Exemplo de Uso:** `GET /cards/`

#### 2. Obter Carta por ID
   - **Rota:** `GET /cards/:id`
   - **Descrição:** Retorna uma carta com o ID correspondente.
   - **Exemplo de Uso:** `GET /cards/123`

#### 3. Criar Nova Carta
   - **Rota:** `POST /cards/`
   - **Descrição:** Cria uma nova carta com os dados fornecidos.
   - **Exemplo de Uso:** `POST /cards/`

#### 4. Atualizar Carta
   - **Rota:** `PUT /cards/:id`
   - **Descrição:** Atualiza os dados de uma carta existente.
   - **Exemplo de Uso:** `PUT /cards/123`

#### 5. Deletar Carta
   - **Rota:** `DELETE /cards/:id`
   - **Descrição:** Deleta uma carta com o ID correspondente.
   - **Exemplo de Uso:** `DELETE /cards/123`

### API de Estudantes (`Students API`)

#### 1. Obter Todos os Estudantes
   - **Rota:** `GET /students/`
   - **Descrição:** Retorna todos os estudantes cadastrados.
   - **Exemplo de Uso:** `GET /students/`

#### 2. Obter Estudante por ID
   - **Rota:** `GET /students/:id`
   - **Descrição:** Retorna um estudante com o ID correspondente.
   - **Exemplo de Uso:** `GET /students/abc`

#### 3. Criar Novo Estudante
   - **Rota:** `POST /students/`
   - **Descrição:** Cria um novo estudante com os dados fornecidos.
   - **Exemplo de Uso:** `POST /students/`

#### 4. Atualizar Estudante
   - **Rota:** `PUT /students/:id`
   - **Descrição:** Atualiza os dados de um estudante existente.
   - **Exemplo de Uso:** `PUT /students/abc`

#### 5. Deletar Estudante
   - **Rota:** `DELETE /students/:id`
   - **Descrição:** Deleta um estudante com o ID correspondente.
   - **Exemplo de Uso:** `DELETE /students/abc`

## Notas Adicionais

- As classes `Card` e `Student` contêm métodos para gerar IDs únicos.
- A validação de URLs e campos de entrada vazios é realizada nos métodos apropriados das classes.
- As rotas principais da API estão definidas em `routes/index.js`, que inclui os roteadores de cartas e estudantes.
- A aplicação utiliza o pacote `express` para gerenciar rotas e o pacote `uuid` para gerar IDs únicos.

Espero que esta documentação ajude a entender a estrutura e a funcionalidade do projeto. Se houver alguma dúvida ou necessidade de esclarecimentos adicionais, sinta-se à vontade para perguntar.