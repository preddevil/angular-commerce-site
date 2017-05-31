switch (process.env.NODE_ENV) {
    case 'dev':
    case 'development':
        module.exports = require('./config/webpack.dev')('developement');
        break;
    case 'prod':
    case 'production':
    default:
        module.exports = require('./config/webpack.prod')('production');
}