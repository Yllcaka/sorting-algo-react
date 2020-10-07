//Selection sort implementation in JS

const selectionSort = (list = [], change = console.log) => {
  // Create a copy of the list so that the beggining list doesnt change
  let usedList = [...list];
  //Begin the loop for the algorithm
  for (let i = 0; i < usedList.length; i++) {
    setTimeout(() => {
      //Set a timeout to make it asynchronous so that the list wouldn't immediately be sorted
      let min_index = i;
      for (let j = i + 1; j < usedList.length; j++) {
        if (usedList[j] < usedList[min_index]) min_index = j;
      }
      let currentMin = usedList[min_index];
      usedList[min_index] = usedList[i];
      usedList[i] = currentMin;
      change([...usedList]); // use the change function
    }, 0);
  }
};

export { selectionSort };
