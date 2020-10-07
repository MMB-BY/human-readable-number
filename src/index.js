module.exports = function toReadable (number) {
    let result = "";
    let separateNumber = number.toString().split('');
    if (separateNumber.length == 4){
      let buf = separateNumber.shift();
      switch(buf){
          case "1":
              result += "one";
              break;
          case "2":
              result += "two";
              break;
          case "3":
              result += "three";
              break;
          case "4":
              result += "four";
              break;
          case "5":
                  result += "five";
                  break;
          case "6":
                  result += "six";
                  break;  
          case "7":
                      result += "seven";
                      break;
          case "8":
                      result += "eight";
                      break;       
          case "9":
              result += "nine";
              break;
    }
      result += " thousand ";
    }
    if (separateNumber.length == 3){
      let buf = separateNumber.shift();
      switch(buf){
          case "1":
              result += "one";
              break;
          case "2":
              result += "two";
              break;
          case "3":
              result += "three";
              break;
          case "4":
              result += "four";
              break;
          case "5":
                  result += "five";
                  break;
          case "6":
                  result += "six";
                  break;  
          case "7":
                      result += "seven";
                      break;
          case "8":
                      result += "eight";
                      break;       
          case "9":
              result += "nine";
              break;
    }
      result += " hundred ";
    }
   if (separateNumber.length == 2){
    if (separateNumber[0] == 0){
        switch(separateNumber[1]){
            case "1":
                result += "one";
                break;
            case "2":
                result += "two";
                break;
            case "3":
                result += "three";
                break;
            case "4":
                result += "four";
                break;
            case "5":
                    result += "five";
                    break;
            case "6":
                    result += "six";
                    break;  
            case "7":
                        result += "seven";
                        break;
            case "8":
                        result += "eight";
                        break;       
            case "9":
                result += "nine";
                break;
            case "0":
                result = result.slice(0,-1);
                break;
      }

    }
     if (separateNumber[0] != 1 && separateNumber[0] != 0){
       switch(separateNumber[0]){
            case "2":
              result += "twenty";
              break;
          case "3":
              result += "thirty";
              break;
          case "4":
              result += "forty";
              break;
          case "5":
                  result += "fifty";
                  break;
          case "6":
                  result += "sixty";
                  break;  
          case "7":
                      result += "seventy";
                      break;
          case "8":
                      result += "eighty";
                      break;       
          case "9":
              result += "ninety";
              break;
     }
        switch(separateNumber[1]){
          case "1":
              result += " one";
              break;
          case "2":
              result += " two";
              break;
          case "3":
              result += " three";
              break;
          case "4":
              result += " four";
              break;
          case "5":
                  result += " five";
                  break;
          case "6":
                  result += " six";
                  break;  
          case "7":
                      result += " seven";
                      break;
          case "8":
                      result += " eight";
                      break;       
          case "9":
              result += " nine";
              break;
    }
    return result;
  
       }
     if (separateNumber[0] == 1){
      switch(separateNumber.join('')){
        case "10":
            result += "ten";
            break;
            case "11":
              result += "eleven";
              break;
          case "12":
              result += "twelve";
              break;
          case "14":
              result += "fourteen";
              break;
          case "15":
                  result += "fifteen";
                  break;
          case "16":
                  result += "sixteen";
                  break;  
          case "17":
                      result += "seventeen";
                      break;
          case "18":
                      result += "eighteen";
                      break;       
          case "19":
              result += "nineteen";
              break;
          case "13":
              result += "thirteen";
              break;
        }}
    } 
  if (separateNumber.length == 1){
    switch(separateNumber[0]){
          case "1":
              result += "one";
              break;
          case "2":
              result += "two";
              break;
          case "3":
              result += "three";
              break;
          case "4":
              result += "four";
              break;
          case "5":
                  result += "five";
                  break;
          case "6":
                  result += "six";
                  break;  
          case "7":
                      result += "seven";
                      break;
          case "8":
                      result += "eight";
                      break;       
          case "9":
              result += "nine";
              break;
        case "0":
              result += "zero";
              break;
    }
  }
    return result;
}
