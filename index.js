// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriverObj = {...driver};
  newDriverObj[key] = value;
  return newDriverObj;
}
