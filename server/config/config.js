const dotenv = require('dotenv');
dotenv.config();

const config = {
    port: process.env.PORT || 6969,
    db: process.env.DB,
    secret: process.env.JWT_SECRET,
    corsOrigin: process.env.CORS_ORIGIN || '*'
}
module.exports = config;