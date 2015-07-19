/* global __dirname */
/* global process */

var app = require('express')(),
  swig = require('swig'),
  people;

// This is where all the magic happens!
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// Swig will cache templates for you, but you can disable
// that and use Express's caching instead, if you like:
app.set('view cache', false);
// To disable Swig's cache, do the following:
swig.setDefaults({ cache: false });
// NOTE: You should always cache templates in a production environment.
// Don't leave both of these to `false` in production!

app.get('/', function (req, res) {
  res.render('index', {
        pagename: 'awesome people',
        authors: ['Paul', 'Jim', 'Jane', "Lane"]
    });
});

app.listen(process.env.PORT);
console.log('Application Started on http://localhost:%s/', [ process.env.PORT ]);