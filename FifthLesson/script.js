const middleAgeBySex = (infoArray, sex) => {
    let ageArray = [];

    infoArray.forEach(element => {
        if (element.sex == sex)
        ageArray.push(element.age);
    });

    let result = ageArray.reduce((sum, current) => {
        return (sum + current)
    })
    return Math.round(result/ageArray.length);
   } 

   