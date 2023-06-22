var userOne = {
  email: "ihrashik.dev@gmail.com",
  firstName: "Injamul",
  login: () => {
    console.log(this.email, "has logged in");
  },
  logout() {
    console.log(this.email, "has logged out");
  },
};

userOne.firstName = "Rashik";
console.log(userOne);
userOne["email"] = "ihrashik@gmail.com";

var prop = "firstName";
console.log((userOne[prop] = "Mario"));
