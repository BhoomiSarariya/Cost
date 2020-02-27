import React from 'react';
import './App.css';

const arr = [{ x: 1, y: 5, w: 5 },
{ x: 2, y: 7, w: 4 },
{ x: 2, y: 6, w: 3 },
{ x: 5, y: 8, w: 5 }];

const array2 = () => {
  const secondArray = []
  arr.map((item) => {
    if (!secondArray.includes(item.x)) secondArray.push(item.x)

    if (!secondArray.includes(item.y))
      secondArray.push(item.y)

    return secondArray.sort();
  })
  secondArray.map((item, index) => {
    return Calculate(item, secondArray[index + 1])
  })
}
const Calculate = (x, y) => {
  let total = 0;
  arr.map(item => {
      if (item.x <= x && item.y >= y)
        total = total + item.w; 
    return total;
  })
  console.log(x, y, "=", total);
}

const App = () => {
  return (
    <div>{array2()}</div>
  )
}
export default App;
