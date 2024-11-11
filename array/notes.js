const notes = ["note 1", "note 2", "note 3"]; // we can as many as we want // not needed to be of same data type
console.log(notes);
console.log(notes.length); // remember length is property so no () //// index start at 0;

notes.push("added note");   // push add value at the end
console.log(notes);
console.log(notes.length);
  
console.log(notes.pop()); // pop add value at the end
console.log(notes);
console.log(notes.length);

console.log(notes.shift());  // shift method remove very first item
notes.unshift("new first note")  // unshift method add at index 0
console.log(`${notes}\n`)

notes.splice(1, 0, "new note");  // starting index, number of item to be removed, add item if required(add at at starting index)
console.log(notes);

notes[0] = "new assigned at first";
console.log(notes);