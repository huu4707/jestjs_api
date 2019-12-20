const { app } = require('./app')
const { connectDatabase } = require('./database/connect-database')
connectDatabase();

app.listen(4000, () => console.log('Server started: http://localhost:4000'));