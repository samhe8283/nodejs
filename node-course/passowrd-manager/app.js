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

//create account function
function createAccount(account,masterPassword){
    if(typeof accounts==='undefined'){
        accounts=[];
        accounts.push(account);
        var encryptAccount = crypto.AES.encrypt(account,masterPassword)
        storage.setItemSync('accounts',accounts)
    }
    return account;
}

function getAccount(name,masterPassword){
    var matchAccount;
    var accounts = storage.getItemSync('accounts');
    accounts.forEach(function(account) {        
        if(account.name===name){
            matchAccount=account;
        }
    })
    return matchAccount;
}

if(command==='create'){
    createAccount({
        name: argv.name,
        username: argv.username,
        password: argv.password        
    },argv.masterPassword)
}
else if(command==='get'){
    var account= getAccount(argv.name);
    console.log(account);
}

