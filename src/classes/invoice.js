'use strict'
exports.Invoice = void 0
var Invoice = /** @class */ (function () {
  class Invoice {
    constructor(client, details, amount) {
      this.client = client
      this.details = details
      this.amount = amount
    }
    format() {
      return ''
        .concat(this.client, ' owes #')
        .concat(this.amount, ' for ')
        .concat(this.details)
    }
  }
  return Invoice
})()
exports.Invoice = Invoice
var invoices = []
