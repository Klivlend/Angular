var myArr = [1, 23, -11, "Hello", false, true, { name: "Sergiy" }, Boolean, '21.12.2012', '@'];
var ArrFilter = (arr, type = "string") => {
    let newArr = [];
    for (let element of arr) {
        if (typeof element == type) newArr.push(element);
    }
    return newArr
};

console.log(ArrFilter(myArr, "boolean"));