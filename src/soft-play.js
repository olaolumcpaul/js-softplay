// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function occupancy() {
  return {
    adults: adults,
    children: children
  }
}

function enter(numAdults, numChildren) {
  // check if children must be accompanied by at least one adult
  if (numAdults === 0) {
    return false
  }

  // one adult must accompany a child
  if (numAdults < numChildren) {
    return false
  }

  adults = adults + numAdults
  children = children + numChildren
  return true
}

function leave(numAdults, numChildren) {
  // adults cannot leave with multiple children
  if (numChildren > numAdults) {
    return false
  }
  // a child cannot leave without an adult
  if (numChildren > 0 && numAdults === 0) {
    return false
  }

  // more people cannot leave than what is in the softplay center
  if (numAdults > adults || numChildren > children) {
    return false
  }
  const remainingAdults = adults - numAdults
  const remainingChildren = children - numChildren

  // reamining adults must be greater than remaining children
  if (remainingAdults < remainingChildren) {
    return false
  }

  // if you are leavning children alone, then No!
  if (remainingAdults === 0 && remainingChildren > 0) {
    return false
  }
  adults = remainingAdults
  children = remainingChildren

  return true
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
