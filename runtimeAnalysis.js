function addToZero(arr){
    for(let i = 0; i<arr.length-1; i++){
        for(let j = i+1; j<arr.length; j++){
            if (arr[i]+arr[j] === 0){
                return('true');
            }
        }
    }
    return('false');
}

//addToZero runtime is O(n^2)
//spacecomplexity is O(1)

addToZero([1,2,3,-2]);
addToZero([1, 2, 3]);



function hasUniqueChars(string){
    counter = {};
    for (const char of string){
        counter[char] += 1
    }
    for (let i=0; i<counter.length; i++){
        if(Object.values(counter[i])>1){
            return false
        }
    }
    return('true')
}
hasUniqueChars('monday')
//hasUniqueChars runtime is O(N)
//spacecomplexity is O(N) 




function isPangram(string){
    counter ={a:0, b:0, c:0, d:0, e:0,f:0, g:0, h:0,i:0, j:0,k:0, l:0, m:0, n:0, o:0, p:0, q:0, r:0, s:0 ,t:0, u:0, v:0,w:0, x:0, y:0, z:0};
    for (let i=0; i<string.length; i++){
        counter[string[i]] +=1
        }
    console.log(counter)
    counterArr = [Object.values(counter)];
    for(let i=0; i<counterArr.length; i++){
        if (counterArr[i] === 0){
            return('false')
        }
    }
    // console.log('true')
    }
isPangram("The quick brown fox jumps over the lazy dog!");
//isPangram runtime is O(N)
//spacecomplexity is O(1)




function findLongestWord(list){
    longestOne = 0;
    for(let i = 0; i<list.length; i++){
        long = list[i].length
        // console.log(long)
        if (long > longestOne){
            longestOne = long;
        }
    }
    console.log(longestOne);
}
findLongestWord(["hi", "hello"]);
//findLongestWord runtime is O(N)
//spacecomplexity is O(1)