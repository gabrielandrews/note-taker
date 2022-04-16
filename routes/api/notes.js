const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const notesJSON = require('../../db/db.json');


const {v4: uuidv4} = require('uuid');
const req = require('express/lib/request');


router.get('/notes', (req, res) => {
    res.json(notesJSON);
});


router.post('/notes', (req, res) => {


    req.body.id = uuidv4();

    
    const newNote = req.body
    
    
    notesJSON.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'), 
        JSON.stringify(notesJSON)
    )

   
    if(res) {
        console.log(`new note created`)
        return res.json()
    }
});

