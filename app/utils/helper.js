export function calculateBill(rawExpenses, user) {
  const shouldPay = {};
  rawExpenses
    .filter(expense => expense.whoPaid !== user.username && expense.sharedWith.indexOf(user.username) !== -1)
    .map(expense => {
      if (!shouldPay[expense.whoPaid]) {
        shouldPay[expense.whoPaid] = 0
      }
      shouldPay[expense.whoPaid] += (expense.amount / expense.sharedWith.length)
    });

  const shouldEarn = {};
  rawExpenses
    .filter(expense => expense.whoPaid === user.username)
    .map(expense => {
      expense.sharedWith.map(partner => {
        if (partner !== user.username) {
          if (!shouldEarn[partner]) {
            shouldEarn[partner] = 0
          }
          shouldEarn[partner] += expense.amount / expense.sharedWith.length
        }
      })
    });
  
  let totalPay = 0;
  for (let item in shouldPay) {
    totalPay += shouldPay[item];
  }
  let totalEarn = 0;
  for (let item in shouldEarn) {
    totalEarn += shouldEarn[item];
  }
  return {
    shouldPay,
    shouldEarn, 
    totalPay: totalPay.toFixed(2), 
    totalEarn: totalEarn.toFixed(2),
  };
}