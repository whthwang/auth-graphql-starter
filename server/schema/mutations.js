const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql;
const UserType = require('./types/user_type');
const AuthService = require('../services/auth');


// const mutation = new GraphQLObjectType({
//   name: "Mutation",
//   fields: {
//     signup: {
//       type: UserType,
//       args: {
//         email: { type: GraphQLString },
//         password: { type: GraphQLString }
//       },
//       resolve(parentValue, { email, password }, req) {
//         return AuthService.signup({ email, password, req });

//       }
//     }
//   }
// });

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.signup({ email, password, req });
      }
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req;
        console.log('USER HEREEEE', user);
        req.logout();
        return user;
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req });
      }
    }
  }
})

module.exports = mutation;