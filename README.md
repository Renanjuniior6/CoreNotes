# 💾 Sobre CoreNotes_API

API da aplicação CoreNotes que consiste em tratar e devolver os dados para o front end do projeto

## 📚 Índices
- [Funcionalidades](#-funcionalidades)
- [Como rodar o projeto](#-como-rodar-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Observações](#-observações)
- [Pastas do projeto](#-observações)
- [Próximos Passos](#-próximos-passos)

## 🔧 Funcionalidades
- Irá receber os dados das anotações do front end e tratar eles 
  - ➡ Assim que os dados forem enviados pelo usuário a API irá responder devolvendo os dados tratados
    
- A API possui rotas para fazer a leitura, atualização, deletar e criar uma nota de acordo com as requisições da aplicação e do usuário 
  - ➡ Os dados vão ser armazenados no banco de dados e enviar uma resposta ao usuário e o front end
    
- Controles de erros foram criados para dar um feedback melhor ao fazer requisições que podem gerar erros  
  - ➡ Um alerta será mostrado e com um **status code** correspondente apontando o erro que foi gerado
    

## ❓ Como rodar o projeto
```bash
# Clone este respositório
$ git clone [URL]

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm run dev

# A aplicação será iniciada na porta 3333
```

## 🌐 Tecnologias Utilizadas
- [X] [Typescript](https://www.typescriptlang.org/)
- [X] [Node](https://nodejs.org/pt)
- [X] [Express](https://expressjs.com/pt-br/)
- [X] [MongoDB](https://www.mongodb.com/pt-br)
- [X] [Mongoose](https://mongoosejs.com/)
- [X] [Cors](https://www.npmjs.com/package/cors)
- [X] [Dotenv](https://www.npmjs.com/package/dotenv)
- [X] [Http-Status-Codes](https://www.npmjs.com/package/http-status-codes)
- [X] [Zod](https://zod.dev/)

## ❗ Observações 
- Este projeto para rodar corretamente na sua máquina será necessário ter o Docker com imagem do MongoDB
- Caso a imagem do **Mongo** não estiver rodando a aplicação não irá funcionar
- O projeto está usando as configurações do **Eslint + Prettier** para padronização do código

## 📁 Pastas do projeto
-  `./src/server.ts` está localizada o arquivo de setup da aplicação e responsável por fazer rodar 
-  `./src/database/index.ts` onde é feita a conexão com o banco de dados através do **Mongoose**
-  `./src/database/schemas` está o schema que será utilizado nas "colections" do MongoDB
-  `./src/routes` estão todas rotas da aplicação
-  `./src/controllers` estão os controllers de cada rota
-  `./src/services` estão os services chamados pela controller de cada rota
-  `./src/database/repositories` estão os repositories que fazem a interação direta com o Mongo de acordo com a requisição chamada
-  `./src/dtos` estão as tipagens dos schemas da aplicação
-  `./src/entities` estão as principais entidades utilizadas no projeto

## ▶ Próximos passos
- Hospedagem
