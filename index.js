function scuberGreetingForFeet(rideLength) {
  if (rideLength <= 400) {
    return "This one is on me!";
  } else if (rideLength <= 2000) {
    return "That will be twenty bucks.";
  } else if (rideLength <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tipQuality) {
  switch(tipQuality) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }
}
