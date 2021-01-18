Product = require('../models/product.model');

//For index
exports.index = function (req, res) {
    Product.get(function (err, prod) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            data: {name: prod[0].name, data:prod[0].data }
        });
    });
};