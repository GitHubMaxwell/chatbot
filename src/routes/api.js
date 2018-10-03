'use strict';
import express from 'express';

const router = express.Router();

router.get('/',(req,res)=>{res.send('HELLO CHATBOT')})

router.post('/talk', function (req, res) {
    // If bot has not received any message
    if (!req || !req.body || !req.body.message) { res.json({ message: "Ouuups! Error" }) }
    // If user says Hello
    else if (req.body.message === "Hello") { res.json({ message: "Hello human" }) }
    // If user asks how the bot is
    else if (req.body.message === "How are you?") { res.json({ message: "Fine, and you?" }) }
    // If user says other sentence
    else { res.json({ message: "I can't answer that yet :(" }) }
  })

  export default router;