let name = "   Suman Yadav";
console.log(name.length); // length property
console.log(name.toUpperCase()); // toUppercase() method so () at the end
let passsword = "xyz123";
console.log(passsword.includes("passsword")); // includes method  (to be checked)
console.log(name.trim()); // trim extra space at the beginnig

//
let isValid = function (password1) {
  if (password1.length > 8 && !password1.includes("password")) {
    return true;
  } else return false;
};
console.log(isValid("dskdhhdh233"));
console.log(isValid("gdfkh"));
console.log(isValid("hjhsjdhjsjdhj"));

console.log("hello world");
