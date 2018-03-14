const graphql = require('graphql');
const _ = require('lodash');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt ,
    GraphQLSchema  
} = graphql;


const users = [
    { id: '23',  firstName: "Will", age: 25 },
    { id: '55',  firstName: "Amantha", age: 31 }
];
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt}
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      user: {
            type: UserType,
            args: {id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return _.find(users, { id: args.id });
                
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});