const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get( '/', (req, res) => {
    const queryText = 'SELECT * FROM category;';
    pool.query( queryText )
    .then( (result ) => { 
      console.log( 'categories', result.rows );
      res.send( result.rows ); })
    .catch( ( error ) => {
      console.log( 'Error completing SELECT query', error );
      res.sendStatus( 500 );
    });
});

router.get( '/:cat_id', (req, res) => {
  const queryText = 'SELECT id, wepname FROM weapon WHERE cat_id=$1;';
  pool.query( queryText, [ req.params.cat_id ] )
  .then( (result ) => { 
    console.log( result.rows );
    res.send( result.rows ); })
  .catch( ( error ) => {
    console.log( 'Error completing SELECT query', error );
    res.sendStatus( 500 );
  });
});

module.exports = router;