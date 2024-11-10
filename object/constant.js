let isValid = true;
isValid = false;
console.log(isValid);

/*   const isFound = true;   // cont can't be reassigned
    isFound = false;
    console.log(isFound);   // TypeError
 */

const gradeCalc = function (obtained, total) {
  const percentage = (obtained / total) * 100;
  let grade = "";
  if (percentage >= 90) {
    return (grade = "A");
  } else if (percentage >= 80) {
    return (grade = "B");
  } else if (percentage >= 70) {
    return (grade = "C");
  } else if (percentage >= 60) {
    return (grade = "D");
  } else return (grade = "F");
};
const data = gradeCalc(15, 20);
const nextdata = gradeCalc(18, 20);
console.log(data);
console.log(nextdata);
