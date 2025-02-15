// let greet = () =>{
//     console.log("안녕 내 이름은", name+ "야");
// }
// greet();

// let greet = (name) =>{
//     console.log("안녕 내 이름은", name+ "야");
// }
// greet("제시카");

let greet = (name) =>{
    console.log("안녕 내 이름은", name+ "야");
    return name;
}
greet("제시카");

// -----------------------------------------------------------

// console.log(greet);
console.log(greet("J"));

function ymd(year, month, day){

    if(month > 12){
        console.log("월은 13월 이상이 될 수 없습니다.");
    }else if(day > 31){
        console.log("일은 32일 이상이 될 수 없습니다.");
    }else{
        if(year && month && day){        
            console.log(year+"/"+month+"/"+day);
        }else if(year && month){
            console.log(year+"년", month+"월");
        }else{
            console.log(year+"년");
        }
    }    
}

ymd(1234);
ymd(1234, 12);
ymd(1234, 13);
ymd(1234, 12, 31);
ymd(1234, 12, 78);

// -----------------------------------------------------------
// findSmallestElement 함수를 구현해 주세요.
// findSmallestElement 의 arr 인자는 숫자 값으로만 이루어진 배열입니다.
// arr 의 값들 중 가장 작은 값을 리턴 해주세요.
// 만일 arr 가 비어있으면 0을 리턴 해주세요.
// 예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 0이 리턴 되어야 합니다.
// 이용되는 배열
// [100,200,3,0,2,1]


let arr = [100,200,123,101,2,99];
let findSmallestElement = (arr) =>{
    if(arr.length === 0){
        console.log(0);
        return 0;
    }else{
        let arrLength = arr.length;
        for(let j = 0; j < arrLength; j++){
        for(let i = 0; i < arrLength - 1; i++){     
            if(arr[i] > arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
            }
        }
    }
}
    console.log(arr);
    let result = arr[0];
    return result;
}

console.log(findSmallestElement(arr));
// -----------------------------------------------------------


// 67700 경우
//  50000 X 1
//  10000 X 1
//  5000  X 1
//  1000 X 2
//  500 X 1
//  100 X 2

let money = 67700;

function coin(money){
    const denominations = [50000, 10000, 5000, 1000, 500, 100];
    let result = [];
    for(let i = 0; i < denominations.length; i++){
        result.push(Math.floor(money / denominations[i]));
        money = money % denominations[i];
    }

    console.log(result);
    for(let i = 0; i < denominations.length; i++){
        console.log(denominations[i]+"원", result[i]+"개");
    }

}

coin(money);