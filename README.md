# User Manager

Este repositório contém o código-fonte de um sistema de gerenciamento de usuários, dividido em duas partes principais: backend e frontend. O backend é desenvolvido com NestJS e utiliza TypeORM para interagir com um banco de dados Postgres. O frontend é desenvolvido com Angular e utiliza o framework Materialize CSS para o design.

## Pré-requisitos

Antes de começar, certifique-se de ter o Docker instalado na sua máquina.

## Configuração

1. Clone este repositório:

    ```bash
    git clone https://github.com/msoaresms/user-manager-challenge.git
    ```

2. Navegue até o diretório clonado:

    ```bash
    cd user-manager-challenge
    ```

3. Execute o arquivo `compose.yaml` para criar as imagens Docker e a network necessária:

    ```bash
    docker compose up -d
    ```

4. Após as imagens estarem em execução, execute o comando para popular o banco de dados com dados de exemplo:

    ```bash
    docker exec -it user-manager-backend npm run seed:prod
    ```

Este comando gerará 15 usuários aleatórios, além de um usuário padrão para acesso ao sistema.

## Executando a aplicação

Após a configuração estar concluída, você pode acessar a aplicação:

- **Frontend**: [http://localhost:4200](http://localhost:4200)
- **Backend (API)**: [http://localhost:3000](http://localhost:3000)

O usuário padrão tem as seguintes credenciais:

- **Email**: admin@admin.com
- **Senha**: admin-manager

# Executando sem a utilização do Docker no frontend e backend

## Banco de dados

1. Se o container do banco de dados já foi criado anteriormente, inicie-o com o seguinte comando:

    ```bash
    docker start user-manager-database
    ```

2. Se o container ainda não foi criado, crie-o com o seguinte comando:

    ```bash
    docker run --name user-manager-database -e POSTGRES_PASSWORD=ck2GEqoCs7 -e POSTGRES_USER=user-manager -d -p "5432:5432" postgres
    ```

Certifique-se de que o banco de dados esteja em execução antes de iniciar o backend.

## Backend

1. Certifique-se de ter o Node.js instalado na sua máquina.

2. Navegue até o diretório `user-manager-backend`:

    ```bash
    cd user-manager/user-manager-backend
    ```

3. Instale as dependências do projeto:

    ```bash
    npm install
    ```

4. Inicie o servidor backend em modo de desenvolvimento:

    ```bash
    npm run start:dev
    ```

5. Para popular o banco de dados com os dados iniciais, execute:

    ```bash
    npm run seed:dev
    ```
## Frontend

1. Navegue até o diretório `user-manager-frontend`:

    ```bash
    cd user-manager/user-manager-frontend
    ```

3. Instale as dependências do projeto:

    ```bash
    npm install
    ```

4. Inicie o servidor de desenvolvimento do frontend:

    ```bash
    ng serve
    ```

## Executando a aplicação

Após a configuração estar concluída, você pode acessar a aplicação:

- **Frontend**: [http://localhost:4200](http://localhost:4200)
- **Backend (API)**: [http://localhost:3000](http://localhost:3000)

O usuário padrão tem as seguintes credenciais:

- **Email**: admin@admin.com
- **Senha**: admin-manager
