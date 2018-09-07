const express = require('express');
const router = express.Router();
const Item = require('../models/item_model');

router.get('/', (req, res) => {
    const items = Item.find()
                    .then(items => res.json(items))
                    .catch(error => console.log(error.message));
});
router.post('/', (req, res) => {
    /*let newItem = new Item({
        name: req.body.name,
        price: req.body.price
    });
    newItem.save()
    .then(() => console.log('Successfully saved item!'))
    .catch(error => {
        res.send('Error adding item.');
        console.log(error);*/
    const newItem = new Item({
        name: req.body.name,
        price: req.body.price
    })
    newItem.save()
    .then(() => {res.json({success: true})})
    .catch(() => {res.json({success: false})});
})
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(error => res.status(404).json({success: false}));
})
module.exports = router;