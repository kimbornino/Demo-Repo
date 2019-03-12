let ratePerHour = getanswer("Enter your hourly rate");

let hoursWorked = getanswer("Enter your hours worked:");

function getanswer(message) {
  let answer = prompt(message);
  return answer;
}

if (hoursWorked<=40) {
  console.log (ratePerHour*hoursWorked)
}
else {
  let otPay = ratePerHour * 1.5;
  let otHours = hoursWorked-40;
  let overtimeTotal = otPay * otHours;
  let regPay = 40* ratePerHour;
  let total = regPay + overtimeTotal;

  console.log (total);
}
