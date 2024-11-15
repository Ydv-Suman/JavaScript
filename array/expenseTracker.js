// Expense -> description, amount

const expenseTracker = {
    name: 'Suman',
    expenses:[],
    addExpenses: function( description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getSummary: function(){
        let totalExpenses = 0;
        this.expenses.forEach(function(expense){
            totalExpenses +=expense.amount;
        })
        return `${this.name} has spent $${totalExpenses}.`
    }
}
expenseTracker.addExpenses('coffee', 10);
expenseTracker.addExpenses('transport', 5);
expenseTracker.addExpenses('rent', 600);
expenseTracker.addExpenses('electricity', 100);
console.log(expenseTracker.getSummary());