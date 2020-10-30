const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');

//@route GET api/items
//@desc Get all items
//@access Public
router.get('/',(req,res)=> {
    Item.find()
        .sort({date:1})
        .then(items => res.json(items))
});

//@route post api/items
//@desc create a item
//@access Public
router.post('/',(req,res)=> {
    const newItem = new Item({
        name: req.body.name,
        gender: req.body.gender,
        bloodtype: req.body.bloodtype
    });

    newItem.save().then(item => res.json(item));

});

//@route delete api/items/id
//@desc Delete a Item
//@access Public
router.delete('/:id',(req,res)=> {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.join({success: true})))
    .catch(err => res.status(404).json({success: false}));
});



module.exports = router;