// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  newDriverObj = Object.assign({}, driver);
  newDriverObj[key] = value;

  return newDriverObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;

  return dirver;
}

function deleteFromDriverByKey(driver, key, value) {

}
