class user {
    constructor(user_id,name,address,phone_number,pw_hash) {
        this.user_id = user_id;
        this.name = name;
        this.phone_number = phone_number;
        this.address = address;
        this.pw_hash = pw_hash;
    }
}

module.exports = user;