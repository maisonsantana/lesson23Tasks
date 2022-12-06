"use strict";

// Створити клас Товар з властивостями: назва, ціна, валюта, кількість,
// і методами: повернути інформацію про товар і купити товар(метод приймає кількість одиниць товару і повертає суму).

// Створити дочірні класи Фізичний товар і Віртуальний товар, обидва походять від класу товар.
// У фізичного товара додається властивість вага.
// У віртуального товара додається властивість розмір пам'яті.

class Product {
  constructor(name, price, currency, amount) {
    this.name = name;
    this.price = price;
    this.currency = currency;
    this.amount = amount;
  }
  set name(name) {
    if (typeof name !== "string") {
      throw new TypeError("Name must be a string!");
    } else if (name.length < max_words) {
      throw new RangeError(
        `The word must be not exceed the maximum number of letters (${max_words})!`
      );
    }
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set price(price) {
    if (typeof price !== "number") {
      throw new TypeError("Price must be a number!");
    } else if (typeof price <= min_price) {
      throw new RangeError(`Price must be more than ${min_price}!`);
    }
    this._price = price;
  }
  get price() {
    return this._price;
  }
  set currency(currency) {
    if (typeof currency !== "string") {
      throw new TypeError("Currency must be a string!");
    }
    this._currency = currency;
  }
  get currency() {
    return this._currency;
  }
  set amount(amount) {
    if (typeof amount !== "number") {
      throw new TypeError("Amount must be a number!");
    } else if (typeof amount <= min_amount) {
      throw new RangeError(`Item amount must be more than ${min_amount}!`);
    }
    this._amount = amount;
  }
  get amount() {
    return this._amount;
  }
  getInfoForProduct() {
    return `Your product: ${this._name} - ${this._price}${this._currency}, amount - ${this._amount}`;
  }
  buyProduct(amountProduct = this.amount) {
    if (typeof amountProduct !== "number") {
      throw new TypeError("Enter the required number!");
    } else if (typeof amountProduct <= min_amount) {
      throw new RangeError(
        `Item amount must be more than ${min_amount}! Try start with at least 1`
      );
    }
    return `Your purchase: ${amountProduct} ${this._name}, price - ${
      this._price * amountProduct
    }${this._currency}`;
  }
}

class TrueProduct extends Product {
  constructor(name, price, currency, amount, weight) {
    super(name, price, currency, amount);
    this.weight = weight;
  }
  set weight(weight) {
    if (typeof weight !== "number") {
      throw new TypeError("Weight must be a number!");
    } else if (weight < min_weight) {
      throw new RangeError(`Weight must be more than ${min_weight}!`);
    }
    this._weight = weight;
  }
  get weight() {
    return this._weight;
  }
  getInfoForProduct() {
    return `Your product: ${this._name} - ${this._price}${this._currency}, amount - ${this._amount}, weight - ${this._weight} `;
  }
}

class VirtualProduct extends Product {
  constructor(name, price, currency, amount, amountMemory) {
    super(name, price, currency, amount);
    this.amountMemory = amountMemory;
  }
  set amountMemory(amountMemory) {
    if (typeof amountMemory !== "number") {
      throw new TypeError("Amount Memory must be a number!");
    } else if (typeof amountMemory < min_memory) {
      throw new RangeError(`Amount Memory must be more than ${min_amount}`);
    }
    this._amountMemory = amountMemory;
  }
  get amountMemory() {
    return this._amountMemory;
  }
  getInfoForProduct() {
    return `Your product: ${this._name} - ${this._price}${this._currency}, amount - ${this._amount}, amount memory - ${this._amountMemory}`;
  }
}

try {
  const product = new Product("Mac", 1800, "$", 2);
  console.log(product.getInfoForProduct());
  console.log(product.buyProduct());
  const trueProduct = new TrueProduct("Mac", 1800, "$", 2, 2000);
  console.log(trueProduct.getInfoForProduct());
  const virtualProduct = new VirtualProduct("Mac", 1800, "$", 2, 512);
  console.log(virtualProduct.getInfoForProduct());
} catch (error) {
  console.log(error);
}
