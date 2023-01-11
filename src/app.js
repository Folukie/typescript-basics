"use strict";
exports.__esModule = true;
var invoice_js_1 = require("./classes/invoice.js");
var payment_js_1 = require("./classes/payment.js");
var docOne;
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    if (type.value === "invoice") {
        doc = new invoice_js_1.Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new payment_js_1.Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
});
