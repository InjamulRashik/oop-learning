class User {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.score = 0;
  }
  login() {
    console.log(`${this.name} has logged in`);
    return this;
  }
  logout() {
    console.log(`${this.name} has logged out`);
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.name, "Score is now", this.score);
    return this;
  }
}

var userOne = new User("Rashik", 27, "male");
console.log(userOne.login().updateScore().updateScore().logout());
// userOne.logout();
// userOne.logout();

/** Methods should be created outside of the Consturctor Block
 */
