//Insertion sort implementation in JS
const insertionSort = (list, change = console.log) => {
  // Create a copy of the list so that the beggining list doesnt change
  let usedList = [...list];
  for (let i = 1; i < usedList.length; i++) {
    setTimeout(() => {
      //Set a timeout to make it asynchronous so that the list wouldn't immediately be sorted
      let key = usedList[i];
      let prevNum = i - 1;
      while (prevNum >= 0 && key < usedList[prevNum]) {
        usedList[prevNum + 1] = usedList[prevNum];
        prevNum -= 1;
      }
      usedList[prevNum + 1] = key;
      change([...usedList]); // use the change function
    }, 0);
  }
};

export default insertionSort;
