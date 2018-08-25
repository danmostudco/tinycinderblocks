// import environmental variables
require('dotenv').config({ path: 'variables.env' });

// START APP
const app = require('./app');
app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running on port ${server.address().port} 💪💪💪`)
});