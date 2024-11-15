//const notes = ["note 1", "note 2", "note 3"]; // we can as many as we want // not needed to be of same data type/

// console.log('\n');
// console.log(notes);
// console.log(notes.length); // remember length is property so no () //// index start at 0;

// // methods
// notes.push("added note");   // push add value at the end
// console.log(notes);
// console.log(notes.length);
  
// console.log(notes.pop()); // pop add value at the end
// console.log(notes);
// console.log(notes.length);

// console.log(notes.shift());  // shift method remove very first item
// notes.unshift("new first note")  // unshift method add at index 0
// console.log(`${notes}\n`)

// notes.splice(1, 0, "new note");  // starting index, number of item to be removed, add item if required(add at at starting index)
// console.log(notes);

// notes[0] = "new assigned at first";
// console.log(notes);



// //forEach
// console.log('\n');
// notes.forEach(function(item, index){
//     console.log(`the index is ${index} & item is ${item}`);
// })



// // for loop
// for (let i = 0; i < notes.length; i++){
//     console.log(notes[i]);
// }


//console.log(notes.indexOf('note 1'));  // -1 if not found in array
// console.log('\n);

const newNote = [{
    topic: 'call',
    descp: 'friend'
},{
    topic: 'fitness',
    descp: 'exercise'
},{
    topic: 'read',
    descp: 'book'
}]

const filterNotes = function(note, text){
    const filterNote = note.filter(function(notes, index){
        const isTopicMatch = notes.topic.toLowerCase().includes(text.toLowerCase());
        const isDescpMatch = notes.descp.toLowerCase().includes(text.toLowerCase());
        return isTopicMatch || isDescpMatch;
        //return false;           // false will return empty array
    })
    return filterNote;
}
let match = filterNotes(newNote, 'call');
console.log(match);



// const findnewNote = function(newNote, noteTopic){
//     const index = newNote.findIndex(function(note, num){
//         return note.topic.toLowerCase() == noteTopic.toLowerCase();
//     })
//     return newNote[index]; 
// }
// const value = findnewNote(newNote, "Read");
// console.log(value);



// const index = newNote.findIndex(function(note, num){
//     console.log(note);  // stops immediately it find the index 
//     return note.topic === 'call';
//     // return note.descp === 'exercise';
// })
// console.log(index);