const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./graphql/schema');
const userRouter = require('./routes/userRouter');

const app = express();

// Middleware pour GraphQL
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// Utilisation du routeur utilisateur
app.use('/user', userRouter);

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});