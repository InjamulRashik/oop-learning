class User {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  login() {
    console.log(`${this.name} has logged in`);
  }
  logout() {
    console.log(`${this.name} has logged out`);
  }
}

var userOne = new User("Rashik", 27, "male");
console.log(userOne);
userOne.login();
userOne.logout();

/** Methods should be created outside of the Consturctor Block
 */
