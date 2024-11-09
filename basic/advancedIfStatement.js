let isAccountBlocked = true;
if (isAccountBlocked) {
  console.log("account is blocked");
} else {
  console.log("welcome!");
}

let age = 23;
if (age <= 7) {
  console.log("should be provided child discount");
} else if (age >= 65) {
  console.log("should be given senior discount");
} else {
  console.log("you donot qualify for any discount");
}

let temp = 45;
if (temp > 0 && temp <= 31) {
  console.log("is cold outside");
} else if ((temp > 31) & (temp < 45)) {
  console.log("not bad");
} else if (temp >= 100 && temp < 110) {
  console.log("is hot outside");
} else if (temp <= 0 || temp >= 110) {
  console.log("donot go outside");
} else {
  console.log("is pretty nice");
}

let isGuestOneVegan = false;
let isGuestTwoVegan = false;
if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Both are vegan");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("one is vegan");
} else {
  console.log("offer anything on menu");
}
