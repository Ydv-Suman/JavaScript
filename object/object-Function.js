let myComputer = {
  // 1st Object
  manufacture: "Apple",
  model: "Pro",
  processor: "M3",
  year: 2024,
};
let yourComputer = {
  // 2nd Objects
  manufacture: "Dell",
  model: "XPS",
  processor: "i9",
  year: 2024,
};

// making function
let computerInfo = function (computer) {
  console.log(
    `${computer.manufacture} has produced new ${computer.model} model with ${computer.processor} processor in ${computer.year}.`
  );
};
computerInfo(myComputer);
computerInfo(yourComputer);

// another
// temperature converter

let tempCOnvertor = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    celsius: ((fahrenheit - 32) * 5) / 9,
    kelvin: ((fahrenheit - 32) * 5) / 9 + 273.15,
  };
};
let temp = tempCOnvertor(32);
console.log(temp);

//
let student = {
  name: "Suman Yadav",
  cwid: 30158478,
  major: "CS",
  classification: "sophomore",
};

let nextStudent = {
  name: "Aman Bhagat",
  cwid: 30163553,
  major: "EEE",
  classification: "junior",
};
let studentDetails = function (stu) {
  let result = `${stu.name} whose cwid is ${stu.cwid} is ${stu.major} major, ${stu.classification} student.       `;
  return result;
};
let stuDetails = studentDetails(student);
console.log(stuDetails);
console.log(studentDetails(nextStudent));
