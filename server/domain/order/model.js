class order {
    constructor(user_id, item_id, time, order_id, pay, status) {
        this.user_id = user_id;
        this.item_id = item_id;
        this.time = time;
        this.order_id = order_id;
        this.pay = pay;
        this.status = status;
    }
}

module.exports = order;