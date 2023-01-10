"use strict";
exports.__esModule = true;
exports.Payment = void 0;
var Payment = /** @class */ (function () {
    function Payment(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return "".concat(this.client, " is owed #").concat(this.amount, " for ").concat(this.details);
    };
    return Payment;
}());
exports.Payment = Payment;
