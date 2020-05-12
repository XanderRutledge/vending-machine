import Service from "../services/service.js";

let _service = new Service()

function _draw() {
    document.getElementById("totalMoney").innerHTML = _service.TargetMoney
    document.getElementById("Purchased").innerHTML = _service.Purchased
}

export default class Controller {


    buy(snackName) {
        _service.buy(snackName)
        _draw()

    }

    reset() {
        _service.reset()
        _draw()

    }

    constructor() {

    }

}