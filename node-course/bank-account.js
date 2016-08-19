//deposit
var account={
    
    Balance:0
}
function deposit(account,amount){
    account.Balance += amount;
}
//withdraw
function withdraw(account,amount){
    account.Balance -=amount;
}
//getBalance
function getBalance(account)
{
    return account.Balance
}


var avaliable = deposit(account,100);
withdraw(account, 1);
console.log(avaliable)
console.log(getBalance(account));