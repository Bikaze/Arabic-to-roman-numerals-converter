function convertToRoman(num) {

//Highlight boundaries
  if(num <= 0 || num >= 4000) {
    console.log("Such a number does not exist in Roman Numerals.");
    return null;
  }

//Change the input number into single digits in an array
  let arr1 = String(num).split("").map(item => parseInt(item));

//Declare some variables I will use
  let arr = []; // This array will store the Roman-Numeral-version of the input number 'num'

  let j = 0; //j will keep track of the position of the digit (ones, tens, ...)

  let roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M']; // this will be used as a reference of Roman-numeral numbers

//Examine each digit in array 'arr1' using this for-loop
  for(let k = arr1.length-1; k >= 0; k--) {
      j += 1; 

      //Conditions targeting numbers 1, 2, 3, in various positions;
      if(arr1[k] < 4 && arr1[k] >= 1) {
        if(j == 1) {
          for(let i = 0; i < arr1[k]; i++) {
            arr.unshift(roman[0])
          }
        }else if(j == 2) {
          for(let i = 0; i < arr1[k]; i++) {
            arr.unshift(roman[2])
          }
        }else if(j == 3) {
          for(let i = 0; i < arr1[k]; i++) {
            arr.unshift(roman[4])
          }
        }else if(j == 4) {
          for(let i = 0; i < arr1[k]; i++) {
            arr.unshift(roman[6])
          }
        }
      }

//Conditions targeting the number 4 in various positions;
      if(arr1[k] == 4) {
        if(j == 1) {
          arr.unshift(roman[0], roman[1])
        }else if(j == 2) {
          arr.unshift(roman[2], roman[3])
        }if(j == 3) {
          arr.unshift(roman[4], roman[5])
        } 
      }

//conditions targeting the numbers 5 to 8 in various positions;
      if(arr1[k] < 9 && arr1[k] >= 5) {
        if(j == 1) {
          for(let i = 5; i < arr1[k]; i++) {
            arr.unshift(roman[0])
          }
        }else if(j == 2) {
          for(let i = 5; i < arr1[k]; ++i){
            arr.unshift(roman[2])
          }
        }else if(j == 3) {
          for(let i = 5; i < arr1[k]; i++) {
            arr.unshift(roman[4])
          }
        }

        j == 1 ? arr.unshift(roman[1]) : 
        j == 2 ? arr.unshift(roman[3]) 
        : arr.unshift(roman[5]);

      }

//Conditions targeting the number 9 in various positions
    if(arr1[k] == 9) {
        if(j == 1) {
          arr.unshift(roman[0], roman[2])
        }else if(j == 2) {
          arr.unshift(roman[2], roman[4])
        }else if(j == 3) {
          arr.unshift(roman[4], roman[6])
        } 
      }
  }
  
  //return the array 'arr' with the .join("") method to return a string .
  return arr.join("");
}

//This is the end of the function...
