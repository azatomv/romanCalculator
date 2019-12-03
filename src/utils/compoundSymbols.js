export default function mergeNumbers(arr){
    debugger;
    let temp = [];
    temp.push(arr.shift());
    while(arr.length > 0){
      let fTemp = temp.pop();
      let fArr = arr.shift();
      if(!isNaN(fTemp + fArr)){
          if(fTemp === '+' || fTemp === '-'){
            temp.push(fTemp);
            temp.push(fArr);
          } else {
            let str = `${fTemp}${fArr}`;
            console.info(str);
            temp.push(parseInt(str, 10)); // temp[0,?]
          }
      }
      if(isNaN(fTemp + fArr)){
          if(!isNaN(fTemp) && isNaN(fArr)){
              temp.push(fTemp); // temp[0,?]
              temp.push(fArr); // temp[0,?]
          }
          if(isNaN(fTemp) && !isNaN(fArr)){
              temp.push(fTemp); // temp[0,?]
              temp.push(fArr); // temp[0,?]
          }
          if(isNaN(fTemp) && isNaN(fArr)){
              let str = fTemp+fArr;
              temp.push(str);
          }
      }
    }
    return temp
  }