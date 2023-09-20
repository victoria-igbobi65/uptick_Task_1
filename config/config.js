require('dotenv').config()

const PORT = process.env.PORT || 5000
const SECRET = process.env.SECRET_KEY;
const DBURL =
    process.env.NODE_ENV === 'test'
        ? process.env.TEST_DBURL
        : process.env.DB_URL

module.exports = {
    PORT,
    DBURL,
    SECRET
}
