import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'


const SortingVisualizer = () => {
    const [array, setArray] = React.useState([])
    const [sortedArray, setSortedArray] = React.useState([])
    const [animatingValue, setAnimatingValue] = React.useState(0);
    React.useEffect(() => {
        resetArray(setArray)
    }, [])

    const finalArray = array;

    for (let i = 0; i < sortedArray.length; i++) {
        finalArray[i] = sortedArray[i]
        
    }

    console.log(array);


    const mergeSort = async (array, delay = 200) => {
        const sortedArray = [];

        if (array.length <= 1) return array;
      
        const middleIdx = Math.floor(array.length / 2);
        const firstHalf = await mergeSort(array.slice(0, middleIdx), delay);
        const secondHalf = await mergeSort(array.slice(middleIdx), delay);
      
        
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
      
        setSortedArray(sortedArray) // Log the sorted array at this step
        //change the original array positions to sorted array positions
       
        
        // console.log(sortedArray);
        // console.log(array);
        return sortedArray;
      };

  return (
    <>
    <Heading textAlign={'center'} mt={1}>Sorting Algorithms Visualizer</Heading>
    <Heading size={'sm'} textAlign={'center'} mt={1}>Developed by Tharindu Epasingha</Heading>
    
    <Flex alignItems={'end'} justifyContent={'center'}   mt={10} >{finalArray.map((value, idx) => (
        
            
        <Box key={idx} w={'10px'} h={`${value}px `} bg={sortedArray.includes(value) ? 'red.200' : 'blue.200'} m="1px" maxH={'80vh'} />
        

    ))}</Flex>

    <Box textAlign={'center'} mt={10}>
        <Button colorScheme='purple' m={2} onClick={() => resetArray(setArray)}>Generate New Array</Button>
        {/* <Button m={2}>Bubble Sort</Button>
        <Button m={2}>Quick Sort</Button> */}
        <Button m={2} onClick={async ()=> {
            const arr = await mergeSort(array)
            
            setArray(arr)
            setSortedArray([])
            
            }
        }>Merge Sort</Button>
        {/* <Button m={2}>Heap Sort</Button>
        <Button m={2}>Insertion Sort</Button>
        <Button m={2}>Selection Sort</Button> */}
    </Box>
    
    </>
  )
}

function resetArray(setArray) {

    const array = []
    for (let i = 0; i < 100; i++) {
        const value = randomIntFromInterval(5, 700)
        
        array.push(value)
    }
    setArray(array)
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}



  





export default SortingVisualizer