function getValueFromKey(obj, key) {
    return obj[key];
}

function setValueForKey(obj, keyValuePair) {
    const newObj = { ...obj }; // Create a shallow copy of the input object.
    const [key, value] = Object.entries(keyValuePair)[0]; // Extract the key-value pair.
    newObj[key] = value; // Add the new key-value pair to the new object.
    return newObj; // Return the new object.
}