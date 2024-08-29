const { body } = require('express-validator');


 const cardDataValidator = [
    body('id', 'ID does not Empty').not().isEmpty(),
    body('title', 'The minimum title length is 6 characters').isLength({ min: 6 }),
    body('description', 'The minimum description length is 15 characters').isLength({ min: 15 }),
]

module.exports=cardDataValidator
