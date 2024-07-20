class order {
    constructor(user_id, item_id, time, date, pay, status) {
        this.user_id = user_id;
        this.item_id = item_id;
        this.time = time;
        this.date = date;
        this.pay = pay;
        this.status = status;
    }
}

module.exports = order;