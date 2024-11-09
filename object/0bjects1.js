// manufacture model processor year
let myComputer = {                                          // to create an objects we siimply open brackets{}
    manufacture: 'Apple',
    model: 'Pro',
    processor: 'M3',
    year: 2024
}
console.log(`MacBoook is manufactured by ${myComputer.manufacture}. It's latest model is ${myComputer.model} and have ${myComputer.processor} processor produced in ${myComputer.year}.`);
 myComputer.processor = 'M3 Pro';
 console.log(`MacBoook is manufactured by ${myComputer.manufacture}. It's latest model is ${myComputer.model} and have ${myComputer.processor} processor produced in ${myComputer.year}.`);


 // name age location
  let person = {
    name: 'sammy',
    age: 21,
    location: 'Monroe'
  }
  console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);
  person.age = person.age+1;
  person.location = 'Dallas';
  console.log(`${person.name} is now ${person.age} and lives in ${person.location}.`);

  // 
  let student = {
    name: "Suman Yadav",
    cwid: 30158478,
    major: "CS",
    classification: "sophomore"
  }
  console.log(`${student.name} whose cwid is ${student.cwid} is ${student.major } major, ${student.classification} student`);
  student.classification = "junior"
  console.log(`${student.name} whose cwid is ${student.cwid} is ${student.major } major, ${student.classification} student`);
