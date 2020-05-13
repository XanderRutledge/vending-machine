import Controller from "./controllers/controller.js"

class App {
    constructor() {
        this.controller = new Controller
    }
}

window["app"] = new App