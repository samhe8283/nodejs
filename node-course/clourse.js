function createrAdder(baseNumber)
{
     function add (numberToAdd)
    {
        return baseNumber + numberToAdd;
    }
    return add;
}

var addTen=createrAdder(10);

console.log(addTen(2));
console.log(addTen(19));
