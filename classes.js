class User {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
}

var userOne = new User("Rashik", 27, "male");
console.log(userOne);

/** The "new" keyword
 * Creates a new empty object{}
 * sets the value of "this" to be the new empty object
 * Call the constructor Method
 */
