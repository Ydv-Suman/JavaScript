// Lexical Scope (Static Scope)
// Global Scope   - Defined outside of all code blocks
// Local scope    - defined inside a code block

// In a scope you can access varibale definedin that scope, or in any parent/ ancestor scope

// Global Scope (varOne)
// Local Scope (varTwo)
    // Local Scope (varFour)
// local Scope (varThree)
let varOne = 'varone'
if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if (true) {
        let varFour = 'varFour'
        console.log(varFour)

    }
}
if (true) {
    let varThree = 'varThree'
}

console.log(varTwo)  // not defined in global scope