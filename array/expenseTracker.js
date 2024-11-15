const expenseTracker = {
    name: 'Suman',
    expenses:[],
    addExpenses: function( description, expenseAmount){
        this.expenses.push({
            description: description,
            expenseAmount: expenseAmount
        })
    },
    income: [],
    addIncome: function(description, incomeAmount){
        this.income.push({
            description: description,
            incomeAmount:incomeAmount
        })
    },
    getSummary: function(){
        let totalExpenses = 0;
        let totalIncome = 0;
        this.expenses.forEach(function(expense){
            totalExpenses +=expense.expenseAmount;
        })
        this.income.forEach(function(income){
            totalIncome += income.incomeAmount
        })
        return `${this.name} has income of $${totalIncome} and has spent ${totalExpenses}.\nNow, ${this.name} has${totalIncome - totalExpenses}.`
    }
}

// Expense -> description, amount
expenseTracker.addExpenses('coffee', 10);
expenseTracker.addExpenses('transport', 5);
expenseTracker.addExpenses('rent', 600);
expenseTracker.addExpenses('electricity', 100);

// add income to array
//addincome method  -> description, amount
expenseTracker.addIncome('salary', 1000);
expenseTracker.addIncome('online', 1000);
expenseTracker.addIncome('tution', 1000);


//summary
console.log(expenseTracker.getSummary());