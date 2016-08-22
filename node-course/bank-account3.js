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
    for(var i=0; i< accounts.length; i++) {
    if(accounts[i].username === username)           
    {
        matchAccount = accounts[i];
    }
    }; 
    return matchAccount;
}

function deposit(account,amount){
    if(typeof amount ==='number' )
        {
            account.Balance += amount;
        }
}
//withdraw
function withdraw(account,amount){
    if(typeof account ==='number')
    {
        account.Balance -=amount;
    }
    else{
        console.log('amount have to be number')
    }
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

deposit(samAccount,'hi');

console.log(getBalance(samAccount))

var sam = getAccount("Sam")
console.log(sam);

console.log(getAccount('Jane'))

