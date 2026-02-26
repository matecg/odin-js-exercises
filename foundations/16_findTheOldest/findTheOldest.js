const findTheOldest = function(people) {
    const sorted = people
        .sort((pepA, pepB) => {
            const currentYear = new Date().getFullYear();
            const aAge = (pepA.yearOfDeath ? pepA.yearOfDeath : currentYear) - pepA.yearOfBirth;
            const bAge = (pepB.yearOfDeath ? pepB.yearOfDeath : currentYear) - pepB.yearOfBirth;
            return bAge - aAge;
        });
    
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
