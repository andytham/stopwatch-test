![ATM Party](https://i.giphy.com/3oz8xZGfHArTvh99YI.gif)

# React ATM Application
Build a virtual ATM machine using React

### Learning Objectives
* React with `create-react-app`
* Error Handling

### Completion
Part 1 - 3

### Submission
Homework is due Sunday by 11pm

### Setup
Use the included starter files in `public/`, `src/` and `package.json`. Perform an `npm install` in terminal to fetch the required dependencies. Navigate to `localhost:3000` in a browser to confirm the starter app is working.

### Assignment
Here are your tasks:

#### Part 1 `src/App.js`
1. Pass a `name` property to each `Account` component, one for "Checking", the other for "Savings"

#### Part 2 `src/Account.js`
1. Use the property you set in `App.js` and add it to the `<h2>`
2. Add a `balance` property to `state` and set to 0 initially
3. When the `Deposit` button is clicked, you should add the amount entered in the text field to the balance
4. When the `Withdraw` button is clicked, you should deduct the amount entered in the text field to the balance
  - You should not be able to withdraw more than the current balance
5. If the current balance is 0, you should add a class of `zero` to the `<div className="balance">` div

#### Part 3 - Error Handling
We can't always count on people using our applications correctly - in fact we should always assume that someone is trying to break our code! Your applications should always have some level of "error handling". Error handling is simply the concept of anticipating different ways that invalid user input could break your application and writing robust code to handle that gracefully.

Try handling these scenarios:
1. What if a User enters a negative number and clicks **Deposit**
2. What if a User enters a negative number and clicks **Withdraw**
3. What if a User enters a string and clicks Deposit or Withdraw?

## Bonus
Add the [accounting](https://www.npmjs.com/package/accounting) package to format the balance.

## Hints
- Remember to set a `ref` on the text field for targeting
- The amount entered in the text field will initially be a string, so you'll need to convert that to a number
- Don't forget to `bind` your click methods!
