let express = require('express');
let expsHandlebars = require('express-handlebars');
let path = require('path');


let app = express();

let port = process.env.PORT || 3000;


app.engine('.hbs', expsHandlebars({
    defaultLayout: 'default',
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use('/', require('./routes/main'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function () {
    console.log('express started on port ' + port);
});