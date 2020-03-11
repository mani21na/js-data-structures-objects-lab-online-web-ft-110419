// Write your solution in this file!
const s = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriverObj = {...driver};
  newDriverObj[key] = value;
  return newDriverObj
}
