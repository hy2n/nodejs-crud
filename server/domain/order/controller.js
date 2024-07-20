const repo = require('./repository');

class OrderController {
    async GetAllOrder(req,res) {
        try {
            const orders = await repo.findAll();
            return res.json(orders);
        } catch (err) {
            console.log(err);
            return res.status(500).json({message : "Error! Repository Fail."})
        }
    }
}

module.exports = new OrderController();