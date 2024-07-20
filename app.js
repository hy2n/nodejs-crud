const express = require('express');

class App {
    constructor() {
        this.app = express();
        this.setRoutes();
    }
    
    setRoutes() {
        this.app.use('/')
    }
}