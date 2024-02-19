const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).json({
        message: 'Get request to Product'
    })
});

router.post('/',(req, res, next) => {
    res.status(200).json({
        message: 'Post request to Product'
    })
});

router.get('/:productId',(req, res, next) => {
    const id = req.params.productId;
    if(id ==='special'){
        res.status(200).json({
            message: 'Get request to Special Product',
            id: id
        })
    }else{
        res.status(200).json({
            message: 'You passed an product ID'
        })
    }
});
router.put('/:productId',(req, res, next) => {
    res.status(200).json({
        message: 'Update Products'
    })
    
});

router.patch('/:productId',(req, res, next) => {
    res.status(200).json({
        message: 'Update one Product'
    })
    
});

router.delete('/:productId',(req, res, next) => {
    res.status(200).json({
        message: 'Delete Product'
    })
});


module.exports = router;