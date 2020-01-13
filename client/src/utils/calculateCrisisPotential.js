function calculateCrisisPotential(typeStored) {
  let resultCrisisPotential = "1";
  switch (typeStored) {
    case "demonstration":
      resultCrisisPotential = "3";
      console.log(typeStored);
      console.log(resultCrisisPotential);
      break;
    case `strike`:
      resultCrisisPotential = "2";
      console.log(typeStored);
      console.log(resultCrisisPotential);
      break;
    case `"fire"`:
      resultCrisisPotential = "1";
      console.log(typeStored);
      console.log(resultCrisisPotential);
      break;
    case "":
      console.log("type not selected");
      break;
    case null:
      console.log("type not yet defined");
      break;
    default:
      console.log("why default: error?");
  }
  return resultCrisisPotential;
}

export default calculateCrisisPotential;
