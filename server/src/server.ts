import express, { request, response } from 'express'; 

const app = express();
app.use(express.json());

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar um nova informação do back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Cria um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Buscar dados do usuário

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
// Request Body: Parâmetros para criação/Atualização de informações

const users = [
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel',
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    // console.log(search);
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    // return response.json(users);
    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];
    return response.json(user);
})

app.post('/users', (request, response) => {

    const data = request.body;

    // POST = Criar um usuário, como o abaixo:
    const user = {
        name: 'data.name',
        email: 'data.email'
    };

    return response.json(user);
    // Devolver resposta para o cliete - Return
});

app.listen(3333);