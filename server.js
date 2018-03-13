const express = require('express');
const app = express();
const expressGraphQL = require('express-graphql');

app.use('/graphql', expressGraphQL({
    graphiql: true    //development tool for queries against out development server (only for dev env)
}));

app.listen(9999, () => console.log('Live on PORT'));