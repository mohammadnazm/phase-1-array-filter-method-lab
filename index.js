function findMatching(drivers, query) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === query.toLowerCase()
  );
}

function fuzzyMatch(drivers, query) {
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(query.toLowerCase())
  );
}

function matchName(drivers, query) {
  return drivers.filter(
    (driver) => driver.name.toLowerCase() === query.toLowerCase()
  );
}

const driversArray = [
  { name: "John", hometown: "New York" },
  { name: "Jane", hometown: "Chicago" },
  { name: "Jim", hometown: "Los Angeles" },
];

console.log(findMatching(["John", "Jane", "Jim"], "john"));
console.log(fuzzyMatch(["John", "Jane", "Jim"], "j"));
console.log(matchName(driversArray, "John"));
