// global (name)
// local(name)
    //local()  // goes for local variable first
//local()

// when we assign a value to variable but that is never explitly defined
// we have new global variable is defined

let name = 'Suman'
if (true) {
    // let name = 'Yadav'
    if (true) {
        let name = 'krishna'    // use let while assigning value to varible other
        console.log(name)   //otherwise it's gonna work as expected
    }
    
}
if (true) {
    console.log(name)
}
