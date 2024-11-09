let add = function(a, b, c, d){
    let result = a+b+c+d;
    return result;
}
let value = add(1, 2, 3, 4);
console.log(value);

let multiply = function(e, e, f, g){
    let resultTwo = e*f*g*h;
    return resultTwo;
}
let num = add(1, 3, 5, 7);
console.log(num);

// Defult arguements
let getScore = function(name = 'sams', score = 95){ // these values only get used if there is no arguemnet is provided
    return 'Name: ' + name + '\nscore:' + score;
}
let data = getScore('Suman', 90);
let data_1 = getScore(undefined, 80); // must provide something for the first arguement to provide arguement for next one
console.log(data);
console.log(data_1);

// tip calculator
let tipCalculator = function(subtotal, tipPercentage){
    let tipAmount = subtotal * tipPercentage;
    let totalAmount = subtotal + tipAmount;
    return 'TipAmount: ' + tipAmount + '\nTotalAmount: ' + totalAmount;
}
let amount = tipCalculator(100, .2);
console.log(amount);

// grade calculator
// >= 90 grgade A
// >=80<90 grade B
// >=70 <80 grade C
// else pass

let gradeCalculator = function(a,b,c){
    let totalScore  = 300;
    let scoreObtained = a+b+c;
    let scorePer = (scoreObtained/totalScore)*100;
    let lettergrade = '';
    console.log('Score obtained: ' + scoreObtained + '\nScore Percentage: ' + scorePer)
    if (scorePer >= 90){
        lettergrade = 'A';
    } else if(scorePer>=80){
        lettergrade = 'B';
    } else if (scorePer >= 70){
        lettergrade = 'C';
    } 
    else if (scorePer>=50){
        lettergrade =  'D';
    }
    return `you got a ${lettergrade} (${scorePer})%`;
}
let grade = gradeCalculator(90, 85, 80);
console.log(grade);