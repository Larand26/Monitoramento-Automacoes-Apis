# Monitoramento-Automacoes-Apis

API em Node.js com TypeScript, Express e MongoDB para registrar e consultar logs de execução de automações.

## Visão geral

O projeto expõe uma API REST com prefixo `/rest/v1` para:

- criar logs de execução;
- consultar logs com filtros opcionais;
- testar a aplicação com uma rota simples de health check.

## Tecnologias

- Node.js
- TypeScript
- Express
- Mongoose
- MongoDB
- CORS
- dotenv

## Requisitos

- Node.js 18+;
- MongoDB acessível localmente ou via string de conexão;
- npm.

## Instalação

```bash
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto com as variáveis abaixo:

```env
API_PORT=3000
MONGO_URI=mongodb://localhost:27017/mydatabase
TOKEN_SECRET=default_secret
```

## Scripts

- `npm run dev`: executa a API em modo desenvolvimento com reload automático;
- `npm run build`: compila o TypeScript;
- `npm run start`: inicia a aplicação a partir do diretório `dist`;
- `npm run test`: compila e executa o teste localizado em `src/tests/test.ts`.

## Execução

### Desenvolvimento

```bash
npm run dev
```

### Produção/local compilado

```bash
npm run build
npm run start
```

## Estrutura do projeto

- `src/server.ts`: ponto de entrada da aplicação;
- `src/App.ts`: configuração do Express, CORS e rotas;
- `src/config/app.config.ts`: leitura das variáveis de ambiente;
- `src/db/Mongo.ts`: conexão e operações com MongoDB;
- `src/routes/routes.ts`: definição das rotas REST;
- `src/controllers/LogsController.ts`: camada HTTP;
- `src/services/LogsService.ts`: regras de acesso aos dados;
- `src/models/Log.model.ts`: schema do log no MongoDB;
- `src/middlewares/validateLog.ts`: validação básica do payload;
- `src/tests/test.ts`: teste manual de conexão e leitura no banco.

## Endpoints

### `GET /rest/v1/`

Retorna uma resposta simples para verificar se a API está no ar.

Resposta:

```json
{
  "message": "Hello World"
}
```

### `POST /rest/v1/add-log`

Adiciona um log de execução.

Body esperado:

```json
{
  "log": {
    "jobName": "importacao-pedidos",
    "runId": "20260703-001",
    "environment": "development",
    "status": "success",
    "startedAt": "2026-07-03T10:00:00.000Z",
    "finishedAt": "2026-07-03T10:01:10.000Z",
    "durationMs": 70000,
    "message": "Execução concluída com sucesso",
    "details": {
      "recordsProcessed": 120
    }
  }
}
```

Campos obrigatórios dentro de `log`:

- `jobName`
- `runId`
- `environment`
- `status`
- `startedAt`

Valores aceitos para `status`:

- `success`
- `error`
- `warning`
- `running`

Resposta de sucesso:

```json
{
  "success": true,
  "message": "Log added successfully"
}
```

### `GET /rest/v1/get-logs`

Busca logs com filtros opcionais por query string.

Parâmetros opcionais:

- `jobName`
- `environment`
- `status`

Exemplo:

```bash
GET /rest/v1/get-logs?jobName=importacao-pedidos&status=success
```

Resposta de sucesso:

```json
{
  "success": true,
  "data": []
}
```

## Modelo de dados

Os logs são salvos na collection `execution_logs`.

Campos do schema:

- `jobName`;
- `runId`;
- `environment`;
- `status`;
- `startedAt`;
- `finishedAt`;
- `durationMs`;
- `message`;
- `details`.

## Observações

- O CORS está liberado apenas para `http://localhost:5173`.
- A API usa JSON com limite de `1mb`.
- A conexão com MongoDB é aberta no bootstrap do servidor e reutilizada pelo restante da aplicação.

## Teste de conexão

O arquivo `src/tests/test.ts` faz uma conexão com o MongoDB, busca documentos da collection `execution_logs` e encerra a conexão.
