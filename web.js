process.env.NODE_ENV = 'development';

var express = require( 'express' ),
    consolidate = require( 'consolidate' ),
    app = express();

var port = process.env.PORT || 8080;

// Assign the jade engine to .html files
app.engine( 'html', consolidate.jade );

// Set .html as the default extension
app.set( 'view engine', 'html' );
app.set( 'views', __dirname + '/views' );

app.use( express.static( __dirname ) );
app.use( express.static( __dirname + '/js' ) );
app.use( express.static( __dirname + '/css' ) );
app.use( express.static( __dirname + '/font' ) );
app.use( express.static( __dirname + '/profiles' ) );
app.use( express.static( __dirname + '/.well-known' ) );

app.get( '/find.me', function( req, res ) {

    res.render('find', { bodyClass: 'terminal' } );
});

app.configure( 'development', function() {
  app.use( express.errorHandler( { dumpExceptions: true, showStack: true } ) );
});

app.configure( 'production', function() {
  app.use( express.errorHandler() );
});

app.use( app.router );

app.listen( port, function() {
  console.log( "Listening on " + port );
});
