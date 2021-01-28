const removeFromArray = function(...args) {
    const array = args[0];
    const newArr = [];
    array.forEach((item) => {
        if(!args.includes(item)) {
            newArr.push(item)
        }
    });
    return newArr;
}

module.exports = removeFromArray
