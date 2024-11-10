var name = "suman";
name = 123;
var name = "yadav"; // var will redeclare the varibale and don't throw error
console.log(name); // neither it can be tracked to correct // avaoid it

if (true) {
  var fristName = "suman";
}
console.log(fristName);

//
let age; //
console.log(age); //
let birth; // undefined
console.log(birth); //

//  console.log(aged); //
//  let aged; // throws error

// but this will not throws error
console.log(date); // it still read as var at top
var date = 10;
// this will  look like
var dated;
console.log(dated);
var dated = 10;
