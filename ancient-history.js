function classifyDate(date) {
    const now = new Date();
    const oneYear = 365*24*60*60*1000; //in milliseconds
    const timeDifference = date - now;

    if (timeDifference <= 0) {
        if (Math.abs(timeDifference) > oneYear) {
            return "ancient";
        }
        return "past";
    } else {
        if (timeDifference > oneYear) {
            return "distant future";
        }
        return "future";
    }
}