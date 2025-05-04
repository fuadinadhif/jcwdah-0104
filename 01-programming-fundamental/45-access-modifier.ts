/* ----------------------------- Access Modifier ---------------------------- */
// 1. Public - Semua orang bisa akses
// 2. Private - Hanya bisa diakses dari dalam class
// 3. Protected - Belum diimplementasikan di JS

class User {
  username: string;
  #password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.#password = password;
  }

  showPassword() {
    return this.#password;
  }
}

const anton = new User("antonmania", "secure123");

console.log(anton);
console.log(anton.showPassword());
