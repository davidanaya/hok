const express = require('express');
const router = express.Router();
const punchcardController = require('../controllers/punchcardController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', punchcardController.greeting);

router.get('/punchcards', catchErrors(punchcardController.getPunchcards));
router.get('/punchcard/:id', catchErrors(punchcardController.getPunchcard));

module.exports = router;