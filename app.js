

function myFunction(words) {
    let arrWord = {};

    words.forEach(word => {
        let sortWord = word.split('').sort().join('');
        if (arrWord[sortWord]) {
            arrWord[sortWord].push(word);
        } else {
            arrWord[sortWord] = [word];
        }
    });

    return Object.values(arrWord);
}

let a = ["bat", "tap", "cat", "tab", "pat"];
let b = myFunction(a);
console.log(b);
