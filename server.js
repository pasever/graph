 const express = require('express'),
           app = express(),
expressGraphQL = require('express-graphql'),
        schema = require('./schema/schema');

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true    //development tool for queries against out development server (only for dev env)
}));

app.listen(9999, () => { 
    console.log('( ^__^ ) Live on PORT ');
});