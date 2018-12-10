// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {return driver["revenue"] >= revenue})
}

function driverNamesWithRevenueOver(drivers, revenue) {
  filteredDrivers = driversWithRevenueOver(drivers, revenue)
  return filteredDrivers.map(function (driver) {return driver.name})
}

function exactMatch(drivers, obj) {
  key = Object.keys(obj)[0];
  return drivers.filter(function (driver) {return driver[key] === obj[key]})
}

function exactMatchToList(drivers, obj) {
  filteredDrivers = exactMatch(drivers, obj);
  return filteredDrivers.map(function (driver) {return driver.name})
}
