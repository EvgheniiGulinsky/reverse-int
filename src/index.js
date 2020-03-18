module.exports = function reverse (n) {
    let str = n + "";
    let arr =  str.split("")
    if (arr[0]=="-")
    arr[0]=""
    return arr.reverse().join("")
}
