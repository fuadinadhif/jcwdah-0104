{
  const angle1 = 30;
  const angle2 = 50;
  const angle3 = 180 - (angle1 + angle2);
  console.log(angle3);
}
{
  const angle1 = 80;
  const angle2 = 10;
  const angle3 = 180 - (angle1 + angle2);
  console.log(angle3);
}
{
  const angle1 = 40;
  const angle2 = 90;
  const angle3 = 180 - (angle1 + angle2);
  console.log(angle3);
}

function calculateThirdAngle(angle1: number, angle2) {
  const angle3 = 180 - (angle1 + angle2);
  return angle3;
}

console.log(calculateThirdAngle(30, 50));
console.log(calculateThirdAngle(80, 10));
console.log(calculateThirdAngle(40, 90));
