const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get( '/:username', (req, res) => {
    const queryText = 'SELECT * FROM charlist WHERE username=$1;';
    pool.query( queryText, [ req.user.username ] )
    .then( (result ) => { 
      console.log( result.rows );
      res.send( result.rows ); })
    .catch( ( error ) => {
      console.log( 'Error completing SELECT query', error );
      res.sendStatus( 500 );
    });
});

router.post( '/', ( req, res, next ) => {
  const queryText = `INSERT INTO charlist
    ( username, charname, strength, dexterity, intelligence, faith )
    VALUES ( $1, $2, $3, $4, $5, $6 );`;
  pool.query( queryText, [ req.body.username, req.body.charname, req.body.strength,
                    req.body.dexterity, req.body.intelligence, req.body.faith ]) 
  .then( () => { res.sendStatus( 201 ); })
  .catch( ( error ) => {
    console.log( 'Error completing INSERT char query', error );
    res.sendStatus( 500 );
  });
})

router.put( '/:username', ( req, res ) => {
  const queryText = `UPDATE charlist SET charname=$1, strength=$2, dexterity=$3,
  intelligence=$4, faith=$5 WHERE id=$6 AND username=$7;`;
  console.log( 'req: ', req.body );
  console.log( 'req: ', req.user );
  pool.query( queryText, [ req.body.charname, req.body.strength, req.body.dexterity,
    req.body.intelligence, req.body.faith, req.body.id, req.user.username ])
    .then( () => { res.sendStatus( 200 ); })
    .catch( ( error ) => {
      console.log( 'Error completing UPDATE char query', error );
      res.sendStatus( 500 );
    })
})

module.exports = router;