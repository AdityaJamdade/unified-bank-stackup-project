# JavaScript Intermediate Campaign Bounty Submission

## Project Overview

For this bounty, I have created a website that simulates bank account management. The website utilizes classes, switch statements, and try-catch-finally statements, as required by the bounty guidelines.

## Instructions

To use the website, follow these steps:

1. Visit the website by clicking [here](https://unified-bank-stackup-bounty.netlify.app).

2. On the website, you will see two sections: **Account Information** and **Actions**.

### Account Information

- **Account Holder**: Displays the name of the account holder (initially set to "John Doe").
- **Account Type**: Shows the type of the account (initially set to "Savings").
- **Balance**: Displays the current account balance (initially set to $1000.00).

### Actions

- **Select Action**: Choose an action from the dropdown list. You can select from "Deposit," "Withdraw," or "Check Balance."

- **Amount**: Enter the amount for the selected action. Ensure that you enter a valid positive number.

- **Submit**: Click the "Submit" button to perform the selected action on the account.

## Incorporating JavaScript Concepts

Here's how I incorporated the required JavaScript concepts:

### Classes

I created a `BankAccount` class with the following properties:
- `accountHolder`: Stores the name of the account holder.
- `accountType`: Represents the type of the account.
- `balance`: Maintains the account balance (initialized to $1000.00).

### Switch Statements

I used a switch statement to handle user-selected actions. Depending on the chosen action, the switch statement executes the corresponding functionality, such as depositing, withdrawing, or checking the balance.

### Try-Catch-Finally Statements

I implemented try-catch-finally statements to handle exceptions gracefully. For instance, if a user attempts to withdraw more than the available balance or enters an invalid amount, the try-catch-finally block ensures that appropriate error messages are displayed.

## Additional Information

- I added a dark mode feature to enhance user experience. Users can toggle dark mode on and off using the "Dark Mode" switch in the header.

Thank you for considering my submission for the JavaScript Intermediate Campaign Bounty.

---
**Submission Details**

- X (formerly Twitter) Handle: @AdityaJamdade08

- Discord Handle: @aditya_jamdade08

- [GitHub Repository](https://github.com/AdityaJamdade/unified-bank-stackup-project)

- [Website](https://unified-bank-stackup-bounty.netlify.app)
