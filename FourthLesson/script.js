function isInArray(arr, el){
    let res = false;
    arr.forEach(element => {
        if (element === el){
            res = true;
        }   
    });
    return res;
};
function modifyArr(arr, el, newEl){
    let newArr = [];
    arr.forEach((element, i) => {
        if (element === el){
            arr.splice(i, 1, newEl);
            newArr = arr;
        }   
    });
    if (newArr.length )
    return newArr;
    else 
    return `element ${el} is not found in array [${arr}]`
};
function transformString(str, el, newEl){
    let string = str.toLowerCase();
    let element = el.toLowerCase();
    let i = string.indexOf(element);
    if (i === -1){
        return `element ${el} is not found in string [${str}]`
    }
    else {
        return str = str.substring(0, i) + newEl + str.substring(i + el.length);
    }
};
