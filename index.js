// const record = [
//   { year: "2015", result: "W"},
//   { year: "2014", result: "N/A"},
//   { year: "2013", result: "L"},
// ]


// function superbowlWin(result){
//     if( result === "N/A")
//         return "2015"
//     else if (result = "W")
//         return "2015"
// }
 function superbowlWin(array){
    const win = array.find(points => points.result === "W")
   return win ? win.year: undefined;
 }
 const results = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]
 const result = superbowlWin(records)
   console.log(result)


 