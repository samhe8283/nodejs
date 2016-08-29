
var storage=require('node-persist');
//initilize node-persist
storage.initSync();
var crypto=require('crypto-js');
var argv = require('yargs')
            .command('create','create account',function(yargs){
                yargs.options({
                    name:{
                        demand:true,
                        alias:'n',
                        description:'entery name',
                        type:"string"
                    },
                    username:{
                        demand:true,
                        alias:'u',
                        description:'entery username',
                        type:"string"
                    },
                    password:{
                        demand:true,
                        alias:'p',
                        description:'password',
                        type:"string"
                    },
                    masterPassword:{
                        demand:true,
                        alias:'m',
                        description:'password',
                        type:"string"
                    }

                }).help('help')
            }).help('help')
            
           .command('get','retrive your account',function(yargs){
                yargs.options({
                    name:{
                        demand:true,
                        alias:'n'
                    },
                    masterPassword:{
                        demand:true,
                        alias:'m',
                        description:'password',
                        type:"string"
                    }
                })
            })
            .argv;

// set the command
var command=argv._[0];            
//return accounts array
function getAccounts(masterPassword){
    var encryptedAccounts =storage.getItemSync('accounts');
    var accounts=[];
    if(typeof encryptedAccounts!=='undefined'){
        var bytes = crypto.AES.decrypt(encryptedAccounts,masterPassword);
        accounts =JSON.parse(bytes.toString(crypto.enc.Utf8));
    }
    return accounts;
}

//save account
function saveAccounts(accounts,masterPassword){    
    var encrytAccount = crypto.AES.encrypt(JSON.stringify(accounts),masterPassword);
    storage.setItemSync('account',encrytAccount.toString());
    return accounts;

}

//create account function
function createAccount(account,masterPassword){
    var accounts=getAccounts(masterPassword);
        accounts.push(account);
        saveAccounts(accounts,masterPassword);
    return account;
}

function getAccount(accountName,masterPassword){
    var accounts = getAccounts(masterPassword);
    var matchAccount;    
    accounts.forEach(function(account) {        
        if(account.name===accountName){
            matchAccount=account;
        }
    });
    return matchAccount;
}

if(command==='create'){
   try{
    var craateAccount = createAccount({
        name: argv.name,
        username: argv.username,
        password: argv.password        
    },argv.masterPassword);
    console.log('create account');
    console.log(createAccount)
   } catch (e)
   {
       console.log('unable to create account')
   }
}
else if(command==='get'){
    try{
        var account= getAccount(argv.name,argv.masterPassword);
        if(typeof account ==='undefined'){
            console.log('account not found');
        }
        else{
            console.log('your account is ');
            console.log(account);
        }
    }catch(e){
        console.log('unable to fetch account')
    }
}

