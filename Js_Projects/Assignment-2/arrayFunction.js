function arrayMethods(){
    const names = ["Arun","Babu","kumar","Santhosh"];
    const city = ["Madurai","Virudhunagar","salem","Thirunelveli"];    
    const traineeDetails = arrConcat(names,city);
    console.log(traineeDetails);

    
    //1...Function to concat two arrays into single array
    function arrConcat(arr1,arr2){
        const arr = [...arr1,...arr2];
    }

    //2...Getting the index of first occurence else returning -1
    const names1 = ["Arun","Babu","kumar","Santhosh"];
    function arrIndexOf(arr,value){
        for(var i=0;i<=arr.length-1;i++){   
            if(arr[i] == value){
                return i;
            }
            else{
                return -1;
            }
        }
    }
    let firstOccurenceIndex = arrIndexOf(names1,"santhosh");
      
    //3... Joining all the elements into a string and returning that string

    let details = arrJoin(names);
    console.log(details);
    function arrJoin(arr){
        let allValues = arr.toString();
        return allValues.replaceAll(","," ");
    }

    //4...Getting lastIndexOf an specified value or else returning -1
    const nArr = ["Arun","Babu","kumar","Santhosh"];
    function lastIndexOf(arr,value){
        for(var i=arr.length -1;i>0;i--){   
            if(arr[i] == value){
                    return i;
            }
            else{
                    return -1;
            }
        }
     }
     let lastIndex = nArr.lastIndexOf("santhosh");

    //5...Adding value to the end of the array and retrieving length
    let lengthOfArray = arrPush(names,"Kumar");
    console.log(lengthOfArray);
    function arrPush(arr,value){
        arr[arr.length] = value;
        return arr.length;
    }

    //6...Removing the last element of an array and returns that element   
    let cityRemovedVal = arrPop(city);
    function arrPop(arr){
        let newArr =[];
        for(let i=0;i<=arr.length-2;i++){
            let removedElement = arr[arr.length-1];
            newArr[i] = arr[i];
            return removedElement;
        }
    }

    //7...Removing the first element of an array and returning that element
    let cityFirstEleRemoved = arrShift(city);
    function arrShift(arr){
            let value = arr[0];
            let newArr =[];
            for(let i=arr.length-1;i>0;i--){   
                newArr[i] = arr[i];
            }
            return value;
        }

    //8...Adding value to the front of an array using array Unshift
    const travel = ["Air","Bus","Train"];
    let lengthOfFinalArray = arrUnshift(travel,"Bike")
    function arrUnshift(arr,value){
        let newArr = [value,...arr];
        return newArr.length;
    }

    //9...Sorting the elements in an array using array sort
    const sortedArray = arrSort(names);
    function arrSort(arr){
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]>arr[j]){
                    let temp =arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }  

}