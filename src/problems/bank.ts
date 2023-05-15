// Create a class representing a bank account with methods to withdraw, deposit and check balance. (Easy)

class BankAccount {
  public balance: number;
  constructor(balance: number) {
    this.balance = balance;
  }
  public deposit(amount: number){
    this.balance += amount;
    return this.balance
  }
  public withdraw(amount: number) :boolean{
    if (amount>this.balance){
        return false
    }else{
        this.balance -= amount;
        return true
    }
  }
}
let newAccount=new BankAccount(100)
console.log(newAccount.balance)
newAccount.deposit(1000)
console.log(newAccount.balance)
newAccount.withdraw(1500)
console.log(newAccount.balance)
