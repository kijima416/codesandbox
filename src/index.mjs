// function func1(str) {
//   return str;
// }

const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));

const func3 = (str1, str2) => {
  return str1 + str2;
};
console.log(func3("こんにちは", "react"));

const str = {
  name: "yuito",
  age: 23,
};

const sayHello = (name = "名無し") => console.log(`こんにちは${name}さん`);
sayHello();

const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumNum = (num1, num2) => console.log(num1 + num2);
sumNum(arr1[0], arr1[1]);
sumNum(...arr1);

const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

const arr8 = [...arr4, ...arr4];
console.log(arr8);

const nameArr = ["田中", "吉住", "日吉"];
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

const numArr = [1, 2, 3, 4, 5];

const newNumArr = numArr.filter((num) => {
  return num % 2 === 0;
});
console.log(newNumArr);

nameArr.map((name) => console.log(name));

const newNameArr = nameArr.map((name) => {
  if (name === "吉住") {
    return name;
  } else {
    return `${name}様`;
  }
});
console.log(newNameArr);

const val1 = 1 > 0 ? "trueです" : "falseです";
console.log(val1);

const num = 1300;
const numbers =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
console.log(numbers);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100以上の数値です。" : "100未満の数値です。";
};
console.log(checkSum(50, 10));
