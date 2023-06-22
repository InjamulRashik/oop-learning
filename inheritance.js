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

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.name != user.name;
    });
  }
}

var userOne = new User("Rashik", 27, "male");
var admin = new Admin("Injamul", 30, "Female");

var users = [userOne, admin];
admin.deleteUser(userOne);
console.log(users);

// class User {
//   constructor(name, age, sex) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
//     this.score = 0;
//   }
//   login() {
//     console.log(`${this.name} has logged in`);
//     return this;
//   }
//   logout() {
//     console.log(`${this.name} has logged out`);
//     return this;
//   }
//   updateScore() {
//     this.score++;
//     console.log(this.name, "Score is now", this.score);
//     return this;
//   }
// }

// class Admin extends User {
//   super(time) {
//     this.time = time;
//   }
//   delete() {
//     console.log(`${this.name} is being deleted`);
//     return this;
//   }
// }

// var userOne = new User("Rashik", 27, "male");
// var admin = new Admin(new Date());
// console.log(admin.delete());
// userOne.logout();
// userOne.logout();

/** Methods should be created outside of the Consturctor Block
 */

//Functions

// function sum(a, b) {
//   return a + b;
// }
// const result = sum(1, 2);
// console.log(sum(1, 2));
// const sum1 = function (a, b) {
//   return a + b;
// };

// const sumArrow = (a, b) => {
//   return a + b;
// };

// const iife = (function (a, b) {
//   return a + b;
// })(2, 3);
// console.log(iife);
