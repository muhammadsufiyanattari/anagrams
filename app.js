//  var a=['bat','tap','cat','tap','pat']
[['bat,tab'],['tap','pat'],['cat']]

// frihtriojyfnfiytrlu,fdhjydfmjldfhjdfhijfjjeujykkd
// fejhfjnjulnn

let query = ["a", "nark", "bs", "hack", "stair"]
let dictionary = ['hack', 'a', 'rank', 'khac', 'ackh', 'kran', 'rankhacker', 'a', 'ab', 'ba', 'stairs', 'raits']

function sortArray(array) {
    let answer = [];
    for(let i = 0; i< array.length ; i++) {
         let data = array[i].split('').sort().join('');
         answer.push(data);
    }
    return answer;
}

function stringAnagram(dictionary, query) {
    let sortedDict = sortArray(dictionary);
    let sortedQuery = sortArray(query);
    let answer = [];
    console.log(sortedDict.length);
    console.log(sortedQuery.length);
    sortedQuery.map(data => {
        let i = 0;
        sortedDict.forEach(dictData => {
            if(data === dictData)
                i++;
        })
        answer.push(i);
    })

    return answer;
}