function produceDrivingRange(blockRange) {
  return function(startStreet, endStreet) {
    let travelBlocks = Math.abs(parseInt(startStreet)-parseInt(endStreet))
    if (travelBlocks > blockRange) {
      return `${travelBlocks-blockRange} blocks out of range`
    } else if (travelBlocks <= blockRange) {
      return `within range by ${blockRange-travelBlocks}`
    }
  }
}

function produceTipCalculator(tipPercent) {
  return function(tab) {
    return tipPercent*tab
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
