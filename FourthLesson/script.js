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
    let newArr = str.split(" ");
    let found = false;

    newArr.forEach((element, i)=> {
        if (element.toLowerCase() === el.toLowerCase()){
             newArr[i] = newEl;
            found = true;
        }
    });
    if (found){
        return str = newArr.join(" ");
    }
    else return `element ${el} is not found in string [${str}]`
    
};
console.log(transformString('hello my name is', 'mo', 'your'));