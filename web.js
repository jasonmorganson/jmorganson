var express = require( 'express' ),
    consolidate = require( 'consolidate' ),
    app = express();

var port = process.env.PORT || 80;

// Assign the jade engine to .html files
app.engine( 'html', consolidate.jade );

// Set .html as the default extension 
app.set( 'view engine', 'html' );
app.set( 'views', __dirname + '/views' );

app.use( express.static( __dirname ) );
app.use( express.static( __dirname + '/js' ) );
app.use( express.static( __dirname + '/css' ) );
app.use( express.static( __dirname + '/font' ) );

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