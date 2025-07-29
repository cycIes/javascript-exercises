const findTheOldest = function(people) {
    let today = new Date();
    const thisYear = today.getFullYear();

    const oldest = people.reduce((currOld, curr) => {
            let oldestAge;
            let currAge;
            if ("yearOfDeath" in currOld) {
                oldestAge = currOld.yearOfDeath - currOld.yearOfBirth;
            } else {
                oldestAge = thisYear - currOld.yearOfBirth;
            }
            if ("yearOfDeath" in curr) {
                currAge = curr.yearOfDeath - curr.yearOfBirth;
            } else {
                currAge = thisYear - curr.yearOfBirth;
            }
            if (currAge < oldestAge) {
                return currOld;
            }
            return curr;
        });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
