const { app } = require('../app')
const CONFIG = require('../config/config')

var server = app.listen(CONFIG.PORT, () => {
    console.log(`Server is running on http://localhost:${CONFIG.PORT}`)
})

process.on('unhandledRejection', (err) => {
    console.log('Unhandled Rejection!...shutting down....')
    console.log(`Error: ${err.message}`)
    server.close(() => {
        process.exit(1)
    })
})
