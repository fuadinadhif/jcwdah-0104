{
  // const userProfile1 = {
  //   id: 1,
  //   name: "Jhon",
  //   age: 10,
  //   country: "USA",
  //   state: "California",
  // };
  // const userProfile2 = {
  //   id: 2,
  //   name: "Jane",
  //   age: 10,
  //   country: "USA",
  //   state: "California",
  // };
  // const userProfile3 = {
  //   id: 3,
  //   name: "Angel",
  //   age: 10,
  //   country: "USA",
  //   state: "California",
  // };

  /* ------------------------------------ - ----------------------------------- */
  class UserProfile {
    id: number;
    name: string;
    age: number;
    country: string;
    state: string;

    constructor(id, name, age, country, state) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.country = country;
      this.state = state;
    }
  }

  const userProfile1 = new UserProfile(1, "Jane", 10, "USA", "California");
  const userProfile2 = new UserProfile(2, "John", 10, "USA", "California");
  const userProfile3 = new UserProfile(3, "Angel", 10, "USA", "California");

  console.log(userProfile1);
  console.log(userProfile2);
  console.log(userProfile3);
}
