function createrAdder(baseNumber)
{
     return function (numberToAdd)
    {
        return baseNumber + numberToAdd;
    }
   
}

var addTen=createrAdder(10);

console.log(addTen(2));
console.log(addTen(19));
