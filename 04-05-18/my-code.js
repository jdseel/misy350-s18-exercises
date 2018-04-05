let balance = 10000;
interest = 0.01;
years = 0;
while (balance < 1000000) {
  balance = balance * (1 + interest);
  years += 1;
}
console.log("in " + years + " your balnce is " + balance);

function grade_calc(g) {
  if (g > 89) {
    return "Your grade is an A";
  } else if (grade > 79) {
    return "Your grade is a B";
  } else if (grade > 69) {
    return "Your grade is a C";
  } else if (grade > 59) {
    return "Your grade is a D";
  } else {
    return "Your grade is an F";
  }
}
console.log(grade_calc(90));
