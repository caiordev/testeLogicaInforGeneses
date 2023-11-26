const TestIZI = () => {
  for (let i = 1; i <= 50; i++) {
    //iniciamos começando com a condição maior para funcionar.
    //
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
TestIZI();
