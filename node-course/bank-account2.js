var accounts =[];
//acount object has Balance and username

function createAccount(account)
{
    accounts.push(account);    
    return account;
}

function getAccount(username)
{
    var matchAccount;
    accounts.forEach(function(account) {
    if(account.username === username)           
    {
        matchAccount = account;
    }
    }); 
    return matchAccount;
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
    return account.Balance;
}

var samAccount = createAccount({
    Balance:0,
    username:'Sam'})
    var ericAccount = createAccount({
    Balance:0,
    username:'Eric'})
    var janeAccount = createAccount({
    Balance:0,
    username:'Jane'})

deposit(samAccount,1000);

console.log(getBalance(samAccount))

var sam = getAccount("Sam")
console.log(sam);

console.log(getAccount('Jane'))

