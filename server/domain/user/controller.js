const repo = require('./repository');

class UserController {
    async GetAllUser(req,res) {
        try {
            const users = await repo.findAll();
            if (users) return res.status(200).json(users);
            else return res.status(200).json({message : "no user"});
        } catch (err) {
            console.log(err);
            return res.status(500).json({message : "Error! Repository Fail."})
        }
    }

    async DeleteUser(req,res) {
        try {
            const users = await repo.deleteById(req.params.id,req.body);
            if (users) return res.status(200).json({message : "success"});
            else return res.status(200).json({message : "no user"});
        } catch (err) {
            console.log(err);
            return res.status(500).json({message : "Error! Repository Fail."})
        }
    }

    async AddUser(req,res) {
        try {
            const users = await repo.addUser(req.body);
            if (users) return res.status(200).json({message : "success"});
            else return res.status(200).json({message : "no user"});
        } catch (err) {
            console.log(err);
            return res.status(500).json({message : "Error! Repository Fail."})
        }
    }
}

module.exports = new UserController();