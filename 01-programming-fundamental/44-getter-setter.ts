class BankAccount {
  // List property
  owner: string;
  balance: number;
  _accountNumber: number;

  // Fungsi untuk mengisi property class
  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
  }

  // Reguler method
  greetings() {
    return `Welcome, ${this.owner}!`;
  }

  // Setter method
  set accountNumber(value: number) {
    if (typeof value !== "number") {
      throw new Error("Account number must be a number");
    }

    this._accountNumber = value;
  }

  // Getter method
  get accountNumber() {
    return `${this.owner} account number is: ${this._accountNumber}`;
  }
}

const rafifAccount = new BankAccount("Rafif", 500_000_000);
const zakyAccount = new BankAccount("Zaky", 600_000_000);

console.log(rafifAccount);
console.log(zakyAccount);

/* ------------------------------- Setter Call ------------------------------ */
console.log(rafifAccount.greetings());

// rafifAccount.accountNumber(121239098798789);
rafifAccount.accountNumber = 121239098798789;
console.log(rafifAccount);

// zakyAccount.accountNumber = "ABCD";
console.log(zakyAccount);

/* ------------------------------- Getter Call ------------------------------ */
console.log(rafifAccount.accountNumber);
