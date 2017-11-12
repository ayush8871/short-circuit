if(process.env.NODE_ENV === 'production'){
    // we're in production
    module.exports = require('./prod');
}
else{
    // we're in development
    module.exports = require('./dev');
}