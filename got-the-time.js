function printPrettyDate(date){

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    //const now = new Date();
    const dayOfMonth = date.getDate();
    const month = monthsNames[date.getMonth()];
    const day = daysOfWeek[date.getDay()];
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const period = hours >= 12 ? "PM" : "AM"; 

    hours = hours % 12 || 12;
    hours = String(hours).padStart(2, '0');

    let result = "Today is "+day+", "+month+" "+dayOfMonth+", "+year+", and the time is "+hours+":"+minutes+":"+seconds+" "+ period+".";
    console.log(result);
}