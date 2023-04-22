// DOM
const showBalanceBtn = document.querySelector(".showBalanceBtn");
const balanceh1 = document.querySelector("#balanceh1");
const depositeInput = document.querySelector("#depositeInput");
const depositeh1 = document.querySelector("#depositeh1"); 
const depositeBtn = document.querySelector(".depositeBtn");
const withdrawInput = document.querySelector("#withdrawInput");
const withdrawh1 = document.querySelector("#withdrawh1");
const withdrawBtn = document.querySelector(".withdrawBtn");


class BankAccount {

    balance = 200;

    constructor(username) {
       this.username = username;
   
    }

    welcome() {
        alert(`${this.username}, Welcome to our SimpleBank :)`);
        alert(`Your current balance is: ${this.balance}`);
    }

    showBalance() {
        balanceh1.innerText = this.balance;
    }

    deposite() {
        depositeBtn.addEventListener("click", ()=> {
        let deposite = Number(depositeInput.value);
        this.balance += deposite;
        depositeh1.innerText = "$" + deposite;
        this.showBalance();
        depositeInput.value = "";
        })
    }

    withdraw() {
        withdrawBtn.addEventListener("click", ()=> {
            let withdraw = Number(withdrawInput.value);
            if(withdraw <= this.balance) {
            this.balance -= withdraw;
            withdrawh1.innerText = "$" + withdraw;
            this.showBalance();
            withdrawInput.value = "";
        } else {
            alert("Insufficient funds :(");
            withdrawInput.value = "";
        }
    })
      
    }

}

let  account1 = new BankAccount("Jale");
account1.welcome();
account1.showBalance();
account1.deposite();
account1.withdraw();





