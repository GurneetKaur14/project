import { addIncome, addExpense, addSavings } from './data.js';
import { displaySummary } from './calculations.js';

document.getElementById('addEntry').addEventListener('click', () => {
    const type = document.getElementById('type').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    if (type === 'income') addIncome(amount);
    else if (type === 'expense') addExpense(amount);
    else if (type === 'savings') addSavings(amount);
});

document.getElementById('displaySummary').addEventListener('click', displaySummary);
