var customerName = "bob";

function upperCaseCustomerName() {
    return customerName = customerName.toLocaleUpperCase()
}



function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

const leastFavoriteCustomer = 'bill';
function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = 'hoo';
}
