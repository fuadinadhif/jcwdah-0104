/* ----------------------------- OOP Principles ----------------------------- */
// 1. Encapsulation
// 2. Abstraction
// 3. Polymorphism
// 4. Inheritance

/* ------------------------------ Encapsulation ----------------------------- */
// Menyatukan berbagai macam data / variable / fungsi yang salin berkaitan di satu tempat
class Product {
  name: string;
  price: number;
  expiredDate: Date;

  constructor(name: string, price: number, expiredDate: Date) {
    this.name = name;
    this.price = price;
    this.expiredDate = expiredDate;
  }

  isExpired() {
    if (this.expiredDate.getTime() <= new Date().getTime()) {
      return `${this.name} already expired`;
    } else {
      return `${this.name} is not expired yet`;
    }
  }
}

const biscuit = new Product("Biscuit", 50000, new Date("2025-04-29"));
console.log(biscuit.name);
console.log(biscuit.price);
console.log(biscuit.isExpired());

/* ------------------------------- Abstraction ------------------------------ */
// Mengabstraksi sesuatu yang kompleks agar terlihat sederhan
class CoffeMachine {
  grindBeans() {
    return "Grinding coffee beans...";
  }

  boilWater() {
    return "Boiling water...";
  }

  brew() {
    return `Brewing coffee...`;
  }

  pour() {
    return `Pouring coffee into the cup`;
  }

  serve() {
    return `Serving the coffee. Enjoy!`;
  }

  makeCoffee() {
    return `
      ${this.grindBeans()}
      ${this.boilWater()}
      ${this.brew()}
      ${this.pour()}
      ${this.serve()}
    `;
  }
}

const machine = new CoffeMachine();
console.log(machine.makeCoffee());

/* ------------------------------ Polymorphism ------------------------------ */
// Sebuah fungis / object yang memiliki banyak bentuk

/* ------------------------------- Inheritance ------------------------------ */
// Sebuah class / object bisa mewarisi class / object yang lain
class Sale {
  discount: number;
  promoStartDate: Date;
  promoEndDate: Date;
  name: string;
  price: number;

  constructor(
    discount: number,
    promoStartDate: Date,
    promoEndDate: Date,
    name: string,
    price: number
  ) {
    this.discount = discount;
    this.promoStartDate = promoStartDate;
    this.promoEndDate = promoEndDate;
    this.name = name;
    this.price = price;
  }

  isOnPromotion() {
    if (new Date() >= this.promoStartDate && new Date() <= this.promoEndDate) {
      return `Still on sale!`;
    } else {
      return `Not on sale!`;
    }
  }
}

class BookSale extends Sale {
  author: string;

  constructor(
    discount: number,
    promoStartDate: Date,
    promoEndDate: Date,
    name: string,
    price: number,
    author: string
  ) {
    super(discount, promoStartDate, promoEndDate, name, price);
    this.author = author;
  }
}

class ShoesSale extends Sale {
  size: number;

  constructor(
    discount: number,
    promoStartDate: Date,
    promoEndDate: Date,
    name: string,
    price: number,
    size: number
  ) {
    super(discount, promoStartDate, promoEndDate, name, price);
    this.size = size;
  }
}

const harryPotter = new BookSale(
  20,
  new Date("2025-04-30"),
  new Date("2025-05-30"),
  "Harry Potter",
  500000,
  "J.K Rowling"
);

const airJordan = new ShoesSale(
  50,
  new Date("2025-04-01"),
  new Date("2025-04-25"),
  "Air Jordan",
  5000000,
  27
);

console.log(harryPotter.name);
console.log(harryPotter.price);
console.log(harryPotter.discount);
console.log(harryPotter.promoStartDate);
console.log(harryPotter.promoEndDate);
console.log(harryPotter.isOnPromotion());

console.log(airJordan.discount);
console.log(airJordan.price);
console.log(airJordan.size);
console.log(airJordan.isOnPromotion());
