// Code your solution here
const drivers = ["Bobby", "Bonface", "Mitchell", "Anthony", "Bobby"]
function findMatching(drivers, name){
    const filteredArr = drivers.filter(
        (item) => item.toLowerCase() === name.toLowerCase()
      );
      return filteredArr;
    }
    function fuzzyMatch(drivers, letters) {
        const letLower = letters.toLowerCase();
        return drivers.filter((driver) =>
          driver.slice(0, 2).toLowerCase().includes(letLower)
        );
      }
      function matchName(drivers, name) {
        return drivers.filter(
          (driver) => driver.name.toLowerCase() === name.toLowerCase()
        );
      }