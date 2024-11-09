let myAccount = {
    name: 'Sammy',
    expenses: 0,
    income: 0
}
let addExpenses = function(account, amount){
    account.expenses += amount;
}
let addIncome = function(account, amount){
    account.income += amount;
}
let accountReset = function(account){
    account.expenses = 0;
    account.income = 0;
}
let getAccountSummary = function(account){
    let remainingBalance = account.income - account.expenses;
    return `account ${account.name} has total expenses of ${account.expenses}, total income of ${account.income}.\nNow, account ${account.name} has ${remainingBalance} remaining balance.`
}
addExpenses(myAccount, 100);
addIncome(myAccount, 1500);
addExpenses(myAccount, 1000);
addIncome(myAccount, 2000);
console.log(getAccountSummary(myAccount));
accountReset(myAccount)
console.log(getAccountSummary(myAccount));

console.log("\n");
// 
let inventory = {
    productName: "ABC",
    sold: 0,
    added: 0
}
let soldItem = function(account, amount){
    account.sold = account.sold + amount;

}
let addedItem = function(account, amount){
    account.added = account.added + amount;

}
let finalInventory = function(account){
    let remainingItem = account.added-account.sold;
    console.log(`The remaining item of ABC left in inventory is ${remainingItem} after ${account.sold} sold and ${account.added} added.`);
    //return `The remaining item of ABC left in inventory is ${remainingItem} after ${account.sold} sold and ${account.added} added.`;

}

soldItem(inventory, 5);
addedItem(inventory, 10);
soldItem(inventory, 90);
addedItem(inventory, 10000);
soldItem(inventory, 5787);
addedItem(inventory,90);
finalInventory(inventory); 
//console.log(finalInventory(inventory));
console.log(inventory);