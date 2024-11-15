// sorting array
const note = [{
    topic: 'call',
    descp: 'friend'
},{
    topic: 'fitness',
    descp: 'exercise'
},{
    topic: 'read',
    descp: 'book'
}]

const sortNote = function(notes){
    notes.sort(function(note1, note2){
        if (note1.topic.toLowerCase() < note2.topic.toLowerCase()){
            return -1;
        } else if (note2.topic.toLowerCase() < note1.topic.toLowerCase()) {
            return 1;
        } else {
            return 0;
        }
    })
}
sortNote(note);
console.log(note);