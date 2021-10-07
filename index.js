function scuberGreetingForFeet(distance){
  // Write your code here!
  let result;
  
  if (distance > 2500){
    result = "No can do."
  } 
  else if (distance <= 400){
    result = "This one is on me!"
  }
  else if (distance > 2000){
    result = "I will gladly take your thirty bucks."
  }

  return result;

}

function ternaryCheckCity(city){
  // Write your code here!
  let result = (city === "NYC") ? ("Ok, sounds good.") : ("No go.")
  
  return result;
}

function switchOnCharmFromTip(generosity){
  // Write your code here!
  let result;

  switch(generosity){
    case "generous" : 
      result = "Thank you so much.";
      break;
    case "not as generous" :
      result = "Thank you."
      break;
    case "thanks for everything" :
      result = "Bye." 
      break;
  }
  return result;
}

