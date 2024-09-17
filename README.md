# Implementação de um Sistema Básico de Autenticação JWT (JSON Web Token) em uma API

Este projeto demonstra como construir e executar uma aplicação que utiliza um front-end em ReactJS e um back-end em Node.js, utilizando Docker e Docker Compose para orquestrar os contêineres. O sistema implementa uma autenticação básica usando JWT (JSON Web Token).

## Requisitos

Antes de começar, certifique-se de que você tenha o seguinte instalado:

- **Docker**: [Instruções de instalação](https://docs.docker.com/get-docker/)
- **Docker Compose**: [Instruções de instalação](https://docs.docker.com/compose/install/)
- **Node.js (v20)**: [Instruções de instalação](https://nodejs.org/)

## Clonando o Projeto

Para clonar o projeto do repositório GitHub, abra um terminal e execute:

```bash
git clone https://github.com/vanessaaugutis/desafio-autenticacao.git
cd desafio-autenticacao
```


# Estrutura do projeto
- frontend/ - Contém o código fonte do front-end em ReactJS.
- backend/ - Contém o código fonte do back-end em Node.js.
- docker-compose.yml - Arquivo de configuração do Docker Compose.

# Construindo e Iniciando os Contêineres

Na pasta raiz do projeto rode:
```bash
docker-compose up --build
```

Após a construção e o início dos contêineres, você pode acessar a aplicação.

Front-end: Acesse http://localhost:3000 no seu navegador.
Back-end: O back-end estará acessível na URL http://localhost:3333

# Parando a aplicação

Para parar a aplicação, rode no terminal:
```bash
docker-compose down
```

