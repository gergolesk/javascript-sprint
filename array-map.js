function convert2DArrayToObjectArray(data) {
    return data.map(([key, value]) => ({[key]: value}));
}

function convertArrayOfObjectsToStrings(data) {
    return data.map(obj => {
        return Object.entries(obj)
            .map(([key, value]) => {
                // Capitalize the first character of the key
                const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
                return `${capitalizedKey}: ${value}`;
            })
            .join(", ");
    });
}

function concatenateStrings(data, len) {
    return data.map(str =>
            str.length > len ? str.slice(0, len)+"..." : str
    );
}