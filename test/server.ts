import path from 'path';
import fs from 'fs';
import jsonServer from 'json-server';

const server = jsonServer.create();
const routes = {
  messages: {},
};

const dbJsonFilePath = path.join(__dirname, 'db.json');
fs.writeFileSync(dbJsonFilePath, JSON.stringify(routes), {});
const router = jsonServer.router(dbJsonFilePath);
const middlewares = jsonServer.defaults({
	noCors: false,
});

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

server.get('/api/test', (_, res: any) => {
  res.status(200).send('Ok');
});

// Use default router
server.use(router);

export default server;
