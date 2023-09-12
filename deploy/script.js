// Create a class for bank account
class BankAccount {
    constructor(accountHolder, accountType) {
        this.accountHolder = accountHolder;
        this.accountType = accountType;
        this.balance = 1000.00; // initial balance
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return true;
        }
        return false;
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return true;
        }
        return false;
    }

    getBalance() {
        return this.balance;
    }
}

// updating the account info displayed on the webpage
function updateAccountInfo() {
    const accountHolderElement = document.getElementById('acc-holder');
    const accountTypeElement = document.getElementById('acc-type');
    const accountBalanceElement = document.getElementById('acc-balance');

    // update account info
    accountHolderElement.textContent = `Account Holder: ${account.accountHolder}`;
    accountTypeElement.textContent = `Account Type: ${account.accountType}`;
    accountBalanceElement.textContent = `Balance: $${account.getBalance().toFixed(2)}`;
}

// function to handle user interactions
function handleAction() {
    const action = document.querySelector('#action').value;
    const amount = parseFloat(document.querySelector('#amount').value);

    try {
        switch (action) {
            case 'deposit':
                if (isNaN(amount) || amount <= 0) {
                    throw new Error('Invalid deposit amount. Please enter a positive number.');
                }
                if (account.deposit(amount)) {
                    // update account information and display success message
                    updateAccountInfo();
                }
                break;
            case 'withdraw':
                if (isNaN(amount) || amount <= 0) {
                    throw new Error('Invalid withdrawal amount. Please enter a positive number.');
                }
                if (!account.withdraw(amount)) {
                    throw new Error('Insufficient funds for withdrawal.');
                }
                updateAccountInfo();
                break;
            case 'checkBalance':
                // display account balance
                alert(`Your account balance is - ${account.getBalance()}`)
                break;
            default:
                throw new Error('Invalid action. Please select a valid action.');
        }
    } catch (error) {
        // displaying the error
        alert(error.message);
    } finally {
        document.querySelector('#amount').value = ''
    }
}


// Create an instance of the BankAccount class
const account = new BankAccount("Alex Mark", "Savings");

// Add event listener to the action button
document.querySelector('#action-button').addEventListener('click', handleAction);

// Initial update of account information
updateAccountInfo();

// Function to toggle dark mode
function toggleDarkMode() {
    const darkModeSwitch = document.getElementById('dark-mode-switch');
    const body = document.body;

    if (darkModeSwitch.checked) {
        // Enable dark mode
        body.classList.add('dark-mode');
    } else {
        // Disable dark mode
        body.classList.remove('dark-mode');
    }
}

// Add event listener to the dark mode switch
document.getElementById('dark-mode-switch').addEventListener('change', toggleDarkMode);
