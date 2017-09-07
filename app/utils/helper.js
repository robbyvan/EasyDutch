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

  const shouldReceive = {};
  rawExpenses
    .filter(expense => expense.whoPaid === user.username)
    .map(expense => {
      expense.sharedWith.map(partner => {
        if (partner !== user.username) {
          if (!shouldReceive[partner]) {
            shouldReceive[partner] = 0
          }
          shouldReceive[partner] += expense.amount / expense.sharedWith.length
        }
      })
    });
  
  let totalPay = 0;
  for (let item in shouldPay) {
    totalPay += shouldPay[item];  
  }
  let totalReceive = 0;
  for (let item in shouldReceive) {
    totalReceive += shouldReceive[item];
  }
  console.log('给', shouldPay, '还', shouldReceive);
  return {
    shouldPay,
    shouldReceive, 
    totalPay: totalPay.toFixed(2), 
    totalReceive: totalReceive.toFixed(2),
  };
}

export function calculateTransfer(myBill, user, partner) {
  let { shouldReceive, shouldPay } = myBill;
  if (!shouldReceive) {
    shouldReceive = {};
  }
  if (!shouldPay) {
    shouldPay = {};
  }
  if (!shouldReceive[partner]) {
    shouldReceive[partner] = 0;
  }
  if (!shouldPay[partner]) {
    shouldPay[partner] = 0;
  }
  const amount = shouldReceive[partner] - shouldPay[partner];
  if (amount > 0) {
    return { type: 'receive', amount };
  } else if (amount < 0) {
    return { type: 'pay', amount }
  } else if (amount === 0) {
    return { type: 'even', amount }
  }
}

export function validateNewOrder(newOrder) {
  let result = {
    success: false,
    msg: '',
  };
  if (!newOrder.group) {
    result.msg = 'Please Select a Group.';
    return result;
  }
  if (!newOrder.orderName) {
    result.msg = 'Order name is required.';
    return result;
  }
  if (newOrder.price === -1) {
    result.msg = 'Price is required.';
    return result;
  }
  if (newOrder.sharedBy.length < 2) {
    result.msg = 'At least 2 people should share the new purchase.';
    return result;
  }
  result.success = true;
  result.msg = 'Success.';
  return result;
}