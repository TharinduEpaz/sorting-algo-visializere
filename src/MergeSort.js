export const mergeSort = async (array, delay = 50) => {
    if (array.length <= 1) return array;
  
    const middleIdx = Math.floor(array.length / 2);
    const firstHalf = await mergeSort(array.slice(0, middleIdx), delay);
    const secondHalf = await mergeSort(array.slice(middleIdx), delay);
  
    const sortedArray = [];
    let i = 0,
      j = 0;
  
    while (i < firstHalf.length && j < secondHalf.length) {
      if (firstHalf[i] < secondHalf[j]) {
        sortedArray.push(firstHalf[i++]);
      } else {
        sortedArray.push(secondHalf[j++]);
      }
    }
  
    while (i < firstHalf.length) sortedArray.push(firstHalf[i++]);
    while (j < secondHalf.length) sortedArray.push(secondHalf[j++]);
  
    // Delay for the specified time before returning the sorted array
    await new Promise((resolve) => setTimeout(resolve, delay));
  
    console.log(sortedArray); // Log the sorted array at this step
    return sortedArray;
  };
  