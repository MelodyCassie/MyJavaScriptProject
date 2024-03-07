let prompt = require('prompt-sync')();

let stop = 0

while (stop !==-1) {
    let accountNumber = prompt('Enter your account number: ');
    let balanceAtBeginningOfTheMonth = prompt('Enter your balance at the beginning of the month: ');
    let totalOfAllItemsChargedByTheCustomerThisMonth = prompt('Enter the total items charged by the customer by the end of the month: ');
    let totalOfCreditsAppliedToTheCustomersAccountThisMonth = prompt('Enter the total of credit applied to the customer by the end of the month: ');
    let allowedCreditLimit = prompt('What is the allowed credit limit? ');

    let newBalance = balanceAtBeginningOfTheMonth + totalOfAllItemsChargedByTheCustomerThisMonth - totalOfCreditsAppliedToTheCustomersAccountThisMonth;
    console.log("Your balance is now "+ newBalance +"\n");


    if(newBalance > allowedCreditLimit){
        console.log("Customer with account number "+ accountNumber+" exceeded the credit limit.")
    }
    else console.log("Customer with account number "+ accountNumber+" did not exceed the credit limit. ")

}