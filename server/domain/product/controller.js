const repo = require("./repository");

class ProductController {
    async GetAllProduct(req,res) {
        try {
            const Products = await repo.GetAllProduct();
            if (Products) return res.status(200).json(Products);
        } catch (err) {
            console.log(err);
            return res.status(500).json({message : "Error! Repository Fail."})
        }
    }
}

module.exports = ProductController;