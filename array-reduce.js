function getTotalFromShoppingBasket(basket) {
    return basket.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0,
    );
}
 function getAverageAge(people) {
    if (people.length===0) {
        return 0;
    }
    const sum = people.reduce(
        (accumulator, currentValue) => accumulator + currentValue.age,
        0,
    );
    const averageAge = sum/people.length;
    return averageAge;
 }

 function concatenateObjects(objects) {
    return objects.reduce((result, obj) => {
        const {key, value} = obj;

        if (!result[key]) {
            result[key] = [];
        }

        result[key].push(value);
        return result;
    }, {}

    );
 }