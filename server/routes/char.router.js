const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get( '/', (req, res) => {
    const queryText = 'SELECT * FROM charlist WHERE username=$1;';
    pool.query( queryText, [ req.body.username ] )
    .then( (result ) => { res.send( result.rows ); })
    .catch( ( error ) => {
      console.log( 'Error completing SELECT query', error );
      res.sendStatus( 500 );
    });
});

router.post( '/', ( req, res, next ) => {
  console.log( 'req: ', req.body );
  
  const queryText = `INSERT INTO charlist
    ( username, charname, strength, dexterity, intelligence, faith )
    VALUES ( $1, $2, $3, $4, $5, $6 );`;
  pool.query( queryText, [ req.body.username, req.body.charname, req.body.str,
                    req.body.dex, req.body.int, req.body.faith ]) 
  .then( () => { res.sendStatus( 201 ); })
  .catch( (error) => {
    console.log( 'Error completing INSERT char query', error );
    res.sendStatus( 500 );
  });
})

module.exports = router;