month = "May";
day = 14;
year = 1966;

step1 = 66;
step2 = parseInt(step1/4);
step3 = step1 + step2;
step4 = 1; // mothnum
step6 = step4 + step3;
step7 = day + step6;
step8 = step7;
// 1900's, not jan or feb
step9 = step8 - 0;
step10 = step9 % 7;

console.log(step10);