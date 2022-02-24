# Back-end Challenge 🏅 2021 - Space Flight News - Coodesh

## 📝 Sobre

Esse projeto tem como objetivo o construir uma API (CRUD), baseada na API da
[Space Flight News](https://api.spaceflightnewsapi.net/v3/documentation),
utilizando melhores praticas de programação.

> This is a challenge by [Coodesh](https://coodesh.com/)

## 🛠 Tech

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](http://expressjs.com/)
- [Jest](https://jestjs.io/pt-BR/)
- [Swagger](https://swagger.io/)
- [MongoDB](https://www.mongodb.com/)
- [Axios](https://www.npmjs.com/package/axios)
- [SWC](https://swc.rs/)
- [Node-schedule](https://www.npmjs.com/package/node-schedule)
- [Celebrate](https://www.npmjs.com/package/celebrate)
- [Helmet](https://www.npmjs.com/package/helmet)
- [Cors](https://www.npmjs.com/package/cors)
- [date-fns](https://www.npmjs.com/package/date-fns)
- [Sentry](https://sentry.io/welcome/)

## 🚦 Cobertura de teste unitarios

![coverage jest](./docs/coverage_jest.png)

## ⚙️ Executando

```bash
$ git clone https://github.com/DenisMedeirosSDK/space-flight-news.git

$ cd space-flight-news

$ touch .env
```

No arquivo `.env` devem ser definidas as variaveis que estão dentro de `.env.example`:

### Sem Docker

- `MONGO_URL`:

**atlas**: `mongodb+srv://<username>:<password>@<host>coodesh`

**localhost**: `mongodb://localhost:27017/coodesh`

```bash
$ npm install

$ npm run start:dev
```

### Docker

- `MONGO_URL`: `mongodb://root:root@db/coodesh?authSource=admin`

```bash
$ docker-compose up -d
```

### Endpoint da documentação

[http://localhost:3333/api-docs](http://localhost:3333/api-docs)
