const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
  } = require('graphql');
  
  // Définissez votre schéma GraphQL ici
  
  // Type de données pour un utilisateur
  const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
      id: { type: GraphQLInt },
      username: { type: GraphQLString },
      email: { type: GraphQLString },
    }),
  });
  
  const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      // Champ de requête pour récupérer tous les utilisateurs
      users: {
        type: new GraphQLList(UserType),
        resolve(parent, args) {
          // Ici, vous récupérez les utilisateurs de votre base de données ou de votre source de données
          // Par exemple, vous pourriez utiliser une fonction de contrôleur pour obtenir les utilisateurs
          return [
            { id: 1, username: 'JohnDoe', email: 'john.doe@example.com' },
            { id: 2, username: 'JaneDoe', email: 'jane.doe@example.com' },
          ];
        },
      },
      // Champ de requête pour récupérer un utilisateur par ID
      user: {
        type: UserType,
        args: { id: { type: GraphQLInt } },
        resolve(parent, args) {
          // Ici, vous récupérez un utilisateur spécifique en fonction de l'ID
          // Encore une fois, cela pourrait venir de votre base de données
          return { id: args.id, username: 'SampleUser', email: 'user@example.com' };
        },
      },
    },
  });
  
  const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      // Champ de mutation pour ajouter un nouvel utilisateur
      addUser: {
        type: UserType,
        args: {
          username: { type: GraphQLString },
          email: { type: GraphQLString },
        },
        resolve(parent, args) {
          // Ici, vous ajoutez un nouvel utilisateur à votre base de données
          // Cela pourrait également utiliser une fonction de contrôleur
          const newUser = { id: 3, username: args.username, email: args.email };
          // Retourne le nouvel utilisateur ajouté
          return newUser;
        },
      },
    },
  });
  
  module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
  });  