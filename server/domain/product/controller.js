const repo = require("./repository");

class ProductController {
    async GetAllProduct(req,res) {
        try {
            const Products = await repo.findAll();
            if (Products) return res.status(200).json(Products);
            else return res.status(200).json({message : "no product"});
        } catch (err) {
            console.log(err);
            return res.status(500).json({message : "Error! Repository Fail."})
        }
    }

    async GetProductWithId(req,res) {
        try {
            const Products = await repo.findWithId(req.params.id);
            if (Products) return res.status(200).json(Products);
            else return res.status(200).json({message : "no product"});
        } catch (err) {
            console.log(err);
            return res.status(500).json({message : "Error! Repository Fail."})
        }
    }

    async UpdateWithId(req,res) {
        try {
            const Products = await repo.updateWithId(req.params.id,req.body);
            if (Products) return res.status(200).json({message : "success"});
            else return res.status(200).json({message : "no product"});
        } catch (err) {
            console.log(err);
            return res.status(500).json({message : "Error! Repository Fail."})
        }
    }

    async DeleteWithId(req,res) {
        try {
            const Products = await repo.deleteWithId(req.params.id);
            if (Products) return res.status(200).json({message : "success"});
            else return res.status(200).json({message : "no product"});
        } catch (err) {
            console.log(err);
            return res.status(500).json({message : "Error! Repository Fail."})
        }
    }

    async AddWithId(req,res) {
        try {
            const Products = await repo.addProduct(req.body);
            if (Products) return res.status(200).json({message : "success"});
            else return res.status(200).json({message : "no product"});
        } catch (err) {
            console.log(err);
            return res.status(500).json({message : "Error! Repository Fail."})
        }
    }
}

module.exports = new ProductController();