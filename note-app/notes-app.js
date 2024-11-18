const notes = [{
    topic: 'call',
    descp: 'friend'
},{
    topic: 'fitness',
    descp: 'exercise'
},{
    topic: 'read',
    descp: 'book'
}]

// DOM document object Model

// query and remove
// const p = document.querySelector('p2')
// p.remove()

// query all and remove 
// const allP = document.querySelectorAll('p')
// allP.forEach(function(p){
//     p.remove()
// })

// add a new element
// const addParagraph = document.createElement('p')
// addParagraph.textContent = 'This a update using JS'
// document.querySelector('body').appendChild(addParagraph)


// // accessing the button
// // if only one button
// document.querySelector('button').addEventListener('click', function(e){
//     e.target.textContent = 'Add'
// })

// // provide index to target specific button
// // otherwise it will only access the first button
// document.querySelectorAll('button')[1].addEventListener('click', function(e){
//     e.target.textContent = 'Remove'
// })

// alternate method
// # for id

const filtersNote = {
    searchText: ''

}
const renderNote = function(note, filtersNote){
    const filteredNote = notes.filtersNote(function(notes){
        return notes.topic.toLowerCase().includes(filtersNote.searchText.toLowerCase())
    })
    console.log(filteredNote)
}
renderNote(notes, filtersNote)

// document.querySelector('#create-note').addEventListener('click', function(e){
//     filtersNote.searchText = e.target.value
//     renderNote(note, filtersNote)
// })

// document.querySelector('#remove-all').addEventListener('click', function(){
//     // . is used for class
//     document.querySelectorAll('.note').forEach(function(note){
//         note.remove()
//      })
//     //e.target.textContent = 'Remove'
// })

document.querySelector('#input-text').addEventListener('input', function(e){
    filtersNote.searchText = e.target.value
    renderNote(notes, filtersNote)
})