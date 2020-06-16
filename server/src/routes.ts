import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

// index, show, create, update, delete
// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

// Rota /items
routes.get('/items', itemsController.index);    //Lista todos o Items

// Rota /points
routes.post('/points', pointsController.create);    //Cria um usuário
routes.get('/points', pointsController.index);      //Lista usuários
routes.get('/points/:id', pointsController.show);   //Busca usuário específico

export default routes;