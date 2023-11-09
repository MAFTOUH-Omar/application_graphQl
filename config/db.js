const mongoose = require('mongoose');

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur de connexion à la base de données:'));
db.once('open', () => {
  console.log('Connecté à la base de données');
});

module.exports = db;