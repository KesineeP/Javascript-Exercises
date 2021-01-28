const repeatString = function(str, times) {
    let string = '';
    while(times > 0) {
        string += str;
        times--;
    }
    return string;
}

module.exports = repeatString
