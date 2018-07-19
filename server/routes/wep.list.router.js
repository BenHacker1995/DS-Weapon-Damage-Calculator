const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get( '/', (req, res) => {
    const queryText = 'SELECT id, wepname, cat_id FROM weapon;';
    pool.query( queryText )
    .then( (result ) => { 
      console.log( 'weapons', result.rows );
      res.send( result.rows ); })
    .catch( ( error ) => {
      console.log( 'Error completing SELECT query', error );
      res.sendStatus( 500 );
    });
});

router.get( '/:id', (req, res) => {
    const queryText = 'SELECT * FROM weapon WHERE id=$1;';
    pool.query( queryText, [ req.params.id ] )
    .then( (result ) => { 
      console.log( result.rows );
      res.send( result.rows ); })
    .catch( ( error ) => {
      console.log( 'Error completing SELECT query', error );
      res.sendStatus( 500 );
    });
  });

module.exports = router;