const repo = require('./repository');

class OrderController {
    async GetAllOrder(req,res) {
        try {
            const orders = await repo.findAll();
            if (orders) return res.status(200).json(orders);
            else return res.status(200).json({message : "no user"});
        } catch (err) {
            console.log(err);
            return res.status(500).json({message : "Error! Repository Fail."})
        }
    }

    async GetOrderByUserId(req,res) {
        try {
            const orders = await repo.findByUserId(req.params.id);
            if (orders) return res.status(200).json(orders);
            else return res.status(200).json({message : "no user"});
        } catch (err) {
            console.log(err);
            return res.status(500).json({message : "Error! Repository Fail."})
        }
    }

    async GetOrderByOrderId(req,res) {
        try {
            const orders = await repo.findByOrderId(req.params.id);
            if (orders) return res.status(200).json(orders);
            else return res.status(200).json({message : "no user"});
        } catch (err) {
            console.log(err);
            return res.status(500).json({message : "Error! Repository Fail."})
        }
    }

    async UpdateOrderByOrderId(req,res) {
        try {
            const orders = await repo.updateByOrderId(req.params.id,req.body);
            if (orders) return res.status(200).json({message : "success"});
            else return res.status(200).json({message : "fail"});
        } catch (err) {
            console.log(err);
            return res.status(500).json({message : "Error! Repository Fail."})
        }
    }

    async DeleteOrderByOrderId(req,res) {
        try {
            const orders = await repo.deleteByOrderId(req.params.id);
            if (orders) return res.status(200).json({message : "success"});
            else return res.status(200).json({message : "no user"});
        } catch (err) {
            console.log(err);
            return res.status(500).json({message : "Error! Repository Fail."})
        }
    }
}

module.exports = new OrderController();