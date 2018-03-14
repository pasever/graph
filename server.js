const express = require('express');
const app = express();
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true    //development tool for queries against out development server (only for dev env)
}));

app.listen(9999, () => console.log('Live on PORT'));