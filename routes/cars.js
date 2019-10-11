var express = require('express');
var router = express.Router();
var carsCtrl = require('../../controllers/api/puppies');

/* GET /api/puppies */
router.get('/', carsCtrl.index);
router.get('/:id', carsCtrl.show);
router.post('/', carsCtrl.create);
router.delete('/:id', carsCtrl.delete);
router.put('/:id', carsCtrl.update);

module.exports = router;