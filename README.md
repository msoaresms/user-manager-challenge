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
    docker exec -it user-manager-backend npm run seed
    ```

Este comando gerará 15 usuários aleatórios, além de um usuário padrão para acesso ao sistema.

## Executando a aplicação

Após a configuração estar concluída, você pode acessar a aplicação:

- **Frontend**: [http://localhost:4200](http://localhost:4200)
- **Backend (API)**: [http://localhost:3000](http://localhost:3000)

O usuário padrão tem as seguintes credenciais:

- **Email**: admin@admin.com
- **Senha**: admin-manager

## Estrutura do projeto

- **user-manager-backend**: Contém o código-fonte do backend, desenvolvido com NestJS e TypeORM.
- **user-manager-frontend**: Contém o código-fonte do frontend, desenvolvido com Angular e Materialize CSS.
- **compose.yaml**: Arquivo de configuração do Docker Compose para criar as imagens Docker e a network.