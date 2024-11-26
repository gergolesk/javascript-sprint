function calculateFines(input) {
    const vehicles = JSON.parse(input);
    let result = {
        totalFines: 0,
        cars: []
    };

    for (const vehicle of vehicles) {
        const [make, model, reg, year, fuel] = vehicle;
        let fine = 0;

        if (year < 2000) {
            fine = 20;
        }
        if (fuel.toLowerCase()=="diesel" && year < 2015) {
            fine = Math.max(fine, 10);
        }

        if (fine>0) {
            result.totalFines += fine;
            result.cars.push(
                {
                    reg,
                    year,
                    fuel,
                    fine
                }
            );
        }
    }
    return JSON.stringify(result);
}