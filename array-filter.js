function filterOutOddNumbers(arr) {
    return arr.filter((element) => element%2==0);
}

function filterObjectsByNameLength(arr, len) {
    return arr.filter((element) => element.name.length <= len);
}

function compoundFilter(products) {
    return products.filter(product => {
        return (
            typeof product.code === 'string' && product.code.length > 5 && // Check if code is a string and length > 5
            !product.category.includes('special') && // Check if category doesn't contain "special"
            product.price > 50 && // Check if price is greater than 50
            product.location !== 'Underground' // Check if location is not "Underground"
        );
    });
}