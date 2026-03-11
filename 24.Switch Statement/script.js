// Switch Statement
/*
switch (value){
case option1:
    //break;
    case option2:
        //code for option 2
        break;
        default:
            //code if no match
}
*/

const city = "adis ababa";

switch (city) {
  case "mogadisho":
    console.log(`${city} is the capital of somalia`);
    break;
  case "adis ababa":
    console.log(`${city} is the capital of ethopia`);
    break;
  case "nairobi":
    console.log(`${city} is the capital of kenya`);
    break;
  default:
    console.log(`${city} is unknown`);
}

if (city === "mogadisho") {
  console.log(`${city} is the capital of somalia`);
} else if (city === "naironbi") {
  console.log(`${city} is the capital of kenya`);
} else if (city === "adis ababa") {
  console.log(`${city} is the capital of ethopia`);
} else {
  console.log(`${city} is unknown`);
}
