// Write your solution in this file!
var customerName = 'bob';

var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
  }
  

  const leastFavoriteCustomer = 'someone';

  function changeLeastFavoriteCustomer(newLeastFavorite) {
    // This will throw an error because you can't reassign a constant
    leastFavoriteCustomer = newLeastFavorite;
  }
  
  