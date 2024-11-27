import { getSummary } from './data.js';

export function displaySummary() {
    const summary = getSummary();
    const summaryText = `
    Income: $${summary.income}
    Expenses: $${summary.expenses}
    Savings: $${summary.savings}
    `;
    document.getElementById('summary').textContent = summaryText;
}
