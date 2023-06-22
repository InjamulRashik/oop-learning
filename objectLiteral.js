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
//Explanation of Encapsulation

console.log(userOne.logout());
