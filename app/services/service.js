import Target from "../models/target.js";

let _target = new Target({ snacks: { cheetos: 1.00, doritos: 1.00, lays: 1.00, rootbeer: .50, coke: .50, sprite: .50 }, money: 2.00, maxMoney: 2.00, purchased: [] })

export default class Service {
    buy(snackName) {
        let balance = _target.money - _target.snacks[snackName]
        if (balance >= 0) {
            _target.money -= _target.snacks[snackName]
            _target.purchased.push(snackName)
        }
    }

    reset() {
        _target.money = _target.maxMoney
        _target.purchased = []
    }

    addDollar() {
        _target.money += 1
    }

    get TargetMoney() {
        return _target.money
    }

    get Purchased() {
        return _target.purchased
    }

    constructor() { }
}