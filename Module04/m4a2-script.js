function program(){
    let value1 = parseInt(prompt('Enter the first value', 0));
    let value2 = parseInt(prompt('Enter the second value', 0));

    if (value1 > value2){
    alert(`Value A (${value1}) is higher than Value B (${value2}).`);
    } else if (value1 < value2){
    alert(`Value B (${value2}) is higher than Value A (${value1}).`);
    } else {
    alert(`Value A (${value1}) and Value B (${value2}) are equal to each other.`);

    }
}