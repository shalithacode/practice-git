// function calculateTotalBarLengthReq(
//   gateWidth,
//   gateHeight,
//   rowHeightPercentage,
//   barThickness
// ) {
//   const rowHeight = (gateHeight * rowHeightPercentage) / 100;
//   const rowCount = gateHeight / rowHeight;
//   if (rowCount % 2 === 1) {
//     return "Error: Symmetrical design cannot be generated.";
//   }
//   let totalLength = 0;
//   for (let i = 0; i < rowCount; i++) {
//     if (i % 2 === 0) {
//       totalLength += gateWidth * 2;
//     } else {
//       const diameter = rowHeight - barThickness;
//       const circleCount = gateWidth / diameter;
//       if (circleCount % 2 === 1) {
//         return "Error: Symmetrical design cannot be generated.";
//       }
//       const circleLength = diameter * Math.PI;
//       totalLength += circleLength * circleCount;
//     }
//   }
//   return `Total bar length requirement = ${totalLength.toFixed(2)}cm.`;
// }

// const ironBarThickness = 10;
// console.log(calculateTotalBarLengthReq(500, 500, 20, ironBarThickness));
// console.log(calculateTotalBarLengthReq(100, 100, 20, ironBarThickness));
