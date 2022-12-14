# Node.js, Express, TypeORM, PostgreSQL: CRUD Rest API

## Topics Covered

- Node.js, TypeORM, PostgreSQL CRUD RESTful API Overview
- Project Structure
- Model Data with TypeORM and PostgreSQL
  - Define a Base Entity
  - Add One-to-Many Relationship to User Entity
  - Complete User Entity
  - Create an Account Entity
- Create Validation Schemas with Zod
- Create Services to Communicate with Database
- Create Route Controllers
  - Create a New Account Controller
  - Get a Single Account Controller
  - Get All Accounts Controller
- Create Routes with Express
- Add the Routes to the Express Middleware Pipeline
- Run Database Migration with TypeORM

## Run App

### With Docker

```bash
   make build
```

### For the first time

```bash
   make db
```

### Run the server

```bash
make dev

```

### Without docker

- npm install
- npm run migrate
- npm run db:push
- npm start

### Postman docs

use Zip.postman_collection.json

```

```
