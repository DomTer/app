require('dotenv').config();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    name: 'app'
};

const url =  `mongodb+srv://${db.user}:${db.pass}@${db.host}/${db.name}?retryWrites=true&w=majority`;

mongoose.set('useFindAndModify', false); // https://mongoosejs.com/docs/deprecations.html#-findandmodify-

mongoose.connect(url, { useNewUrlParser: true }).
catch(error => console.log(error));

mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));